<template>
  <div class="thumbor-image-rendering" :class="{cover, adjustToWidth, adjustToHeight}">
    <visual
      :image="imgUrl"
      :background="cover ? 'cover' : ''"
      transition='vv-fade'
    >
    </visual>
    <img v-show="false" @load="imageLoaded" :src="loadingImgUrl" />
  </div>
</template>

<script>
import { getActiveBreakpoint } from '~/assets/js/responsiveHelper';
import VueVisual from 'vue-visual';
import 'vue-visual/index.css';
import path from 'path';

export default {
  name: 'ThumborImageRendering',
  props: {
    store: {
      type: Object
    },
    staticUrl: {
      type: String
    },
    dimensions: {
      type: Object,
      required: true
    },
    cover: {
      type: Boolean,
      default: false
    },
    adjustToWidth: {
      type: Boolean,
      default: false
    },
    adjustToHeight: {
      type: Boolean,
      default: false
    }
  },
  components: {
    visual: VueVisual
  },
  data () {
    return {
      activeDimensions: null,
      imgUrl: null,
      loadingImgUrl: null
    };
  },
  methods: {
    render () {
      this.activeDimensions = [0, 0];
      this.imgUrl = '';
      this.loadingImgUrl = '';
      this.handleResize();
    },
    handleResize () {
      const activeBreakpoint = getActiveBreakpoint(window.innerWidth, Object.keys(this.dimensions));
      const newDimensions = this.dimensions[activeBreakpoint];

      if (
        newDimensions &&
        (newDimensions[0] > this.activeDimensions[0] ||
          newDimensions[1] > this.activeDimensions[1])
      ) {
        this.loadImage(newDimensions);
      }
    },
    loadImage (dimensions) {
      this.activeDimensions = dimensions;
      this.loadingImgUrl = this.getImageUrl(dimensions);
    },
    imageLoaded () {
      this.imgUrl = this.loadingImgUrl;
      this.loadingImgUrl = '';
    },
    getImageUrl (dimensions) {
      const config = {
        originalUrl: '',
        thumborUrl: process.env.thumborUrl,
        width: dimensions[0],
        height: dimensions[1]
      };

      if (this.store) {
        config.originalUrl = this.store.fields.file.url.replace('//', '');
      } else if (this.staticUrl) {
        config.originalUrl = path.join(
          /**
           * use THUMBOR_ASSETS_URL in development environment to make Thumbor able
           * to serve your assets. Otherwise it will use http://localhost:3000 which
           * is not accessible of course.
           *
           * IN PRODUCTION YOU SHOULD USE window.location.hostname SINCE THESE ASSETS
           * ARE PUBLIC AVAILABLE THROUGH THE INDIVIDUAL HOSTNAME (e.g. https://hotel-edison.de)
           */
          process.env.thumborAssetsUrl || window.location.hostname,
          this.staticUrl
        );
      }

      return `${config.thumborUrl}/unsafe/${config.width}x${config.height}/${config.originalUrl}`;
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize);
  },
  mounted () {
    this.render();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    store: function () {
      this.render();
    }
  }
};
</script>

<style lang="scss">
  @import 'ThumborImageRendering';
</style>
