<template>
    <div class="head-img">
      <div class="head-img-image">
        <ThumborImage
          :store="image"
          :dimensions="{
            mo: [600, 300],
            sm: [900, 300],
            md: [1300, 350],
            lg: [1500, 380],
            xl: [1900, 400]
          }"
          :cover="true"
        />
      </div>
      <h1
        class="head-img-headline"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        {{headline}}
      </h1>
      <p
        v-if="subHeadline"
        class="head-img-subheadline"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
      >
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
      type: String
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
