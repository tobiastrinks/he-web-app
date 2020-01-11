<template>
    <div class="hotel-restaurant">
      <div class="hotel-restaurant-head-img">
        <ThumborImage
          :store="content.restaurantImgWide"
          :dimensions="{
            mo: [600, 0],
            sm: [1200, 380]
          }"
        />
        <div class="hotel-restaurant-columns">
          <div class="hotel-restaurant-columns-portraet">
            <ThumborImage
              :store="content.restaurantImgPortraet"
              :dimensions="{
                mo: [260, 0],
                xl: [360, 0]
              }"
            />
          </div>
          <div class="hotel-restaurant-columns-text">
            <RichTextRenderer :document="content.restaurantText" />
            <div class="hotel-restaurant-columns-text-button">
              <LocaleLink :to="content.restaurantButtonLink">
                <ButtonSt>
                  {{ content.restaurantButtonText }}
                </ButtonSt>
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
export default {
  name: 'HotelRestaurant',
  components: {LocaleLink, ButtonSt, RichTextRenderer, ThumborImage},
  computed: {
    content () {
      return this.$store.state.pageHotelStore.content[0];
    },
    restaurantItems () {
      return this.content.restaurantItems;
    }
  }
};
</script>

<style lang="scss">
  @import "HotelRestaurant";
</style>
