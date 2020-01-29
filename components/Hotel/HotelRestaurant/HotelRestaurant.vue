<template>
    <div class="hotel-restaurant">
      <RestaurantHeadImg />
      <div class="hotel-restaurant-columns">
          <div class="hotel-restaurant-columns-img">
            <ThumborImage
              :store="content.restaurantImgColumn"
              :dimensions="{
                mo: [400, 0],
                sm: [700, 0]
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
</template>

<script>
import RestaurantHeadImg from '@/components/Restaurant/RestaurantHeadImg/RestaurantHeadImg';
import RestaurantColumns from '@/components/Restaurant/RestaurantColumns/RestaurantColumns';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HotelRestaurant',
  components: {
    ButtonSt,
    LocaleLink,
    ThumborImage,
    RestaurantColumns,
    RestaurantHeadImg,
    RichTextRenderer
  },
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
