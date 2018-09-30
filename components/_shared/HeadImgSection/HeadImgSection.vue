<template>
    <div class="head-img-section">
      <div class="head-img-section-image">
        <ThumborImage
          :store="image"
          :dimensions="{
            sm: [600, 200],
            md: [900, 300],
            lg: [2000, 400]
          }"
          :cover="true"
        />
        <div class="head-img-section-image-overlay"></div>
      </div>
      <h1 class="head-img-section-headline">
        {{headline}}
      </h1>
      <p class="head-img-section-subheadline">
        {{subHeadline}}
      </p>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HeadImgSection',
  components: {ThumborImage},
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
    }
  }
};
</script>

<style scoped lang="scss">
  @import "HeadImgSection";
</style>
