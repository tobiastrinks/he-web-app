<template>
    <div class="head-img-large">
      <div class="head-img-large-images">
        <no-ssr>
          <Carousel
            ref="carousel"
            :perPage="1"
            :minSwipeDistance="50"
            :paginationEnabled="false"
            :loop="true"
            :autoplay="true"
            :autoplayTimeout="5000"
            :autoplayHoverPause="false"
          >
            <Slide v-for="(image, key) in images" :key="key">
              <div class="head-img-large-images-item">
                <ThumborImage
                  :store="image"
                  :dimensions="{
                    sm: [600, 800],
                    md: [900, 0],
                    lg: [2000, 0]
                  }"
                  :cover="true"
                />
              </div>
            </Slide>
          </Carousel>
        </no-ssr>
      </div>
      <h1 class="head-img-large-headline">
        {{headline}}
      </h1>
      <p class="head-img-large-subheadline">
        {{subHeadline}}
      </p>
      <div class="head-img-large-sun" v-if="hasSun">
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
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'HeadImgLarge',
  components: {
    ThumborImage,
    Carousel,
    Slide
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
