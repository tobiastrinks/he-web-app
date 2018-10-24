<template>
    <div class="head-img-section">
      <div class="head-img-section-image">
        <ThumborImage
          :store="image"
          :dimensions="{
            mo: [600, 200],
            sm: [900, 300],
            md: [1300, 400],
            lg: [1500, 400],
            xl: [1900, 400]
          }"
          :cover="true"
        />
        <div class="head-img-section-image-overlay"></div>
      </div>
      <h1
        class="head-img-section-headline"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {{headline}}
      </h1>
      <p
        class="head-img-section-subheadline"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
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
