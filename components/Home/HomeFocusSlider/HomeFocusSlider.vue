<template>
  <div class="home-focus-slider">
    <no-ssr>
      <Carousel :perPage="1" :minSwipeDistance="50">
        <Slide v-for="(focusOffer, key) in focusOffers.map(item => item.fields)" :key="key">
          <div class="offer-wrapper">
            <Offer
              :image="focusOffer.image"
              :headline="focusOffer.headline"
              :subHeadline="focusOffer.subHeadline"
              :description="focusOffer.description"
              :button="focusOffer.button"
              :buttonLink="focusOffer.buttonLink"
            />
          </div>
        </Slide>
      </Carousel>
    </no-ssr>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Offer from '@/components/_shared/Offer/Offer';

export default {
  name: 'HomeFocusSlider',
  components: {
    Offer,
    Carousel,
    Slide
  },
  computed: {
    focusOffers () { return this.$store.state.pageHomeStore.content[0].focusOffers; }
  }
};
</script>

<style lang="scss" scoped>
  @import 'HomeFocusSlider';
</style>
