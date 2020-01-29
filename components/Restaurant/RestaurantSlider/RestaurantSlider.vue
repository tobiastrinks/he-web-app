<template>
  <div class="restaurant-slider">
    <no-ssr>
      <Carousel :perPage="1" :minSwipeDistance="50">
        <Slide v-for="(image, key) in content.slider" :key="key">
          <div class="restaurant-slider-item">
            <div class="restaurant-slider-item-inner">
              <ThumborImage
                :store="image"
                :dimensions="{
                        mo: [600, 0],
                        sm: [900, 0]
                      }"
                :cover="true"
              />
            </div>
          </div>
        </Slide>
      </Carousel>
    </no-ssr>
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'RestaurantSlider',
  components: {ThumborImage, Carousel, Slide},
  computed: {
    content () {
      return this.$store.state.pageRestaurantStore.content[0];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RestaurantSlider";
</style>
