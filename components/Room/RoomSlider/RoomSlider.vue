<template>
    <div class="room-slider">
      <no-ssr>
        <Carousel :perPage="1" :minSwipeDistance="50">
          <Slide v-for="(image, key) in images" :key="key">
            <div class="room-slider-item">
              <div class="room-slider-item-inner">
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
  name: 'RoomSlider',
  components: {ThumborImage, Carousel, Slide},
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomSlider';
</style>
