<template>
    <div class="hotel-restaurant-item" :class="{alignLeft}">
      <div class="hotel-restaurant-item-row hotel-restaurant-item-image">
        <ThumborImage
          :store="content.image"
          :dimensions="{
            sm: [300, 300]
          }"
          :cover="true"
        />
      </div>
      <div class="hotel-restaurant-item-row hotel-restaurant-item-text">
        <div class="hotel-restaurant-item-text-content">
          <p class="hotel-restaurant-item-text-content-headline">
            {{content.headline}}
          </p>
          <hr class="hr-short" />
          <div class="hotel-restaurant-item-text-content-description">
            {{content.description}}
          </div>
        </div>
        <div v-if="content.buttonLink && content.buttonTitle" class="hotel-restaurant-item-text-button">
          <LocaleLink :to="content.buttonLink">
            <ButtonSt>{{content.buttonTitle}}</ButtonSt>
          </LocaleLink>
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import VueMarkdown from 'vue-markdown';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'HotelRestaurantItem',
  components: {
    LocaleLink,
    ButtonSt,
    ThumborImage,
    VueMarkdown
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    alignLeft: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'HotelRestaurantItem';
</style>
