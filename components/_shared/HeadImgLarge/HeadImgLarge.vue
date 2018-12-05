<template>
    <div class="head-img-large">
      <div class="head-img-large-images">
        <no-ssr>
          <HeadImgLargeSlider :images="images" />
        </no-ssr>
      </div>
      <h1
        id="head-img-large-h1"
        class="head-img-large-headline"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {{headline}}
      </h1>
      <p
        class="head-img-large-subheadline"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-anchor="head-img-large-h1"
      >
        {{subHeadline}}
      </p>
      <div class="head-img-large-sun" v-if="hasSun">
        <ThumborImage
          static-url="/shared/sun.jpg"
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
import HeadImgLargeSlider from '@/components/_shared/HeadImgLarge/HeadImgLargeSlider/HeadImgLargeSlider';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HeadImgLarge',
  components: {
    HeadImgLargeSlider,
    ThumborImage
  },
  props: {
    images: {
      type: Array,
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
  }
};
</script>

<style scoped lang="scss">
  @import 'HeadImgLarge';
</style>
