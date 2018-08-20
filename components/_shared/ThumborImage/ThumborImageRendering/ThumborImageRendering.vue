<template>
  <div>
    <visual
      :image="imgUrl"
      :background="cover ? 'cover' : ''"
      :height="cover ? '100%' : ''"
    >
    </visual>
    <img v-show="false" @load="imageLoaded" :src="loadingImgUrl" />
  </div>
</template>

<script>
import { THUMBOR_URL } from '~/assets/config/externalApiConfig';
import { getActiveBreakpoint } from '~/assets/js/responsiveHelper';
import VueVisual from 'vue-visual';

export default {
  name: 'ThumborImageRendering',
  props: {
    store: {
      type: Object,
      required: true
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
      const activeBreakpoint = getActiveBreakpoint(window.innerWidth);
      const newDimensions = this.dimensions[activeBreakpoint];

      if (
        newDimensions &&
        (newDimensions[0] > this.activeDimensions[0] || newDimensions[1] > this.activeDimensions[1])
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
        originalUrl: this.store.fields.file.url.replace('//', ''),
        thumborUrl: THUMBOR_URL,
        width: dimensions[0],
        height: dimensions[1]
      };

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
