<template>
  <div class="thumbor-image-rendering" :class="{cover}">
    <visual
      :image="imgUrl"
      :background="cover ? 'cover' : ''"
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
    }
  },
  components: {
    visual: VueVisual
  },
  data () {
    return {
      activeDimensions: [0, 0],
      imgUrl: '',
      loadingImgUrl: ''
    };
  },
  methods: {
    handleResize () {
      const activeBreakpoint = getActiveBreakpoint(window.innerWidth, Object.keys(this.dimensions));
      const newDimensions = this.dimensions[activeBreakpoint];

      if (
        newDimensions &&
        (newDimensions[0] > this.activeDimensions[0])
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
    this.handleResize();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style lang="scss">
  @import 'ThumborImageRendering';
</style>
