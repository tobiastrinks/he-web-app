<template>
    <div class="head-img">
      <div class="head-img-image">
        <ThumborImage
            :store="image"
            :dimensions="{
            sm: [600, 200],
            md: [900, 300],
            lg: [2000, 400]
          }"
          :cover="true"
        />
      </div>
      <h1 class="head-img-headline">
        {{headline}}
      </h1>
      <p class="head-img-subheadline">
        {{subHeadline}}
      </p>
      <div class="head-img-sun" v-if="hasSun">
        <ThumborImage
          static-url="/_shared/sun-transparent.png"
          :dimensions="{
            sm: [500, 0],
            md: [700, 0],
            lg: [1000, 0]
          }"
        />
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HeadImg',
  props: {
    image: {
      type: Object,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    subHeadline: {
      type: String,
      required: true
    },
    hasSun: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ThumborImage
  }
};
</script>

<style scoped lang="scss">
  @import 'HeadImg';
</style>
