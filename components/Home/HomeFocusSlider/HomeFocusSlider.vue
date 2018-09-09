<template>
  <div class="home-focus-slider">
    <no-ssr>
      <Carousel :perPage="1" :minSwipeDistance="50">
        <Slide v-for="(focusItem, key) in focusItems" :key="key">
          <div class="offer-pane-wrapper">
            <OfferPane
              :cover="focusItem.fields.cover"
              :headline="focusItem.fields.headline"
              :description="focusItem.fields.description"
              :button="focusItem.fields.button"
              :buttonLink="focusItem.fields.buttonLink"
            />
          </div>
        </Slide>
      </Carousel>
    </no-ssr>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import OfferPane from '@/components/_shared/OfferPane/OfferPane';

export default {
  name: 'HomeFocusSlider',
  components: {
    OfferPane,
    Carousel,
    Slide
  },
  computed: {
    focusItems () { return this.$store.state.pageHomeStore.content[0].focusItems; }
  }
};
</script>

<style lang="scss" scoped>
  @import 'HomeFocusSlider';
</style>
