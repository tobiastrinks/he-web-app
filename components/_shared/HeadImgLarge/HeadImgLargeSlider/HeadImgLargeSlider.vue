<template>
    <div class="head-img-large-slider">
      <agile
        :fade="true"
        :autoplay="true"
        :autoplaySpeed="6000"
        :speed="1000"
        :dots="false"
        :arrows="images.length > 1"
        :prevArrow="left"
        :nextArrow="right"
      >
        <div
          v-for="(image, key) in images"
          :key="key"
          class="head-img-large-slider-image"
        >
          <ThumborImage
            :store="image"
            :dimensions="{
                  mo: [600, 0],
                  sm: [900, 0],
                  md: [1300, 0],
                  lg: [1500, 0],
                  xl: [1900, 0]
                }"
            :cover="true"
          />
        </div>
      </agile>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HeadImgLargeSlider',
  components: {ThumborImage},
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>',
      right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>'
    };
  }
};
</script>

<style lang="scss">
  @import "HeadImgLargeSlider";
</style>
