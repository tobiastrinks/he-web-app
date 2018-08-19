<template>
  <img :src="imgUrl" />
</template>

<script>
import { THUMBOR_URL } from '~/assets/config/externalApiConfig';
import { getActiveBreakpoint } from '~/assets/js/responsiveHelper';

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
    }
  },
  data () {
    return {
      activeDimensions: this.dimensions.sm
    };
  },
  computed: {
    imgUrl () {
      const config = {
        originalUrl: this.store.fields.file.url.replace('//', ''),
        thumborUrl: THUMBOR_URL,
        width: this.activeDimensions[0],
        height: this.activeDimensions[1]
      };

      return `${config.thumborUrl}/unsafe/${config.width}x${config.height}/${config.originalUrl}`;
    }
  },
  methods: {
    handleResize () {
      const activeBreakpoint = getActiveBreakpoint(window.innerWidth);
      const newDimensions = this.dimensions[activeBreakpoint];

      if (
        newDimensions &&
        (newDimensions[0] > this.activeDimensions[0] || newDimensions[1] > this.activeDimensions[1])
      ) {
        this.activeDimensions = this.dimensions[activeBreakpoint];
      }
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
