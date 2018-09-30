<template>
  <div class="hotel">
    <div class="page-head">
      <HeadImgLarge
        v-if="content !== null"
        :images="content.headImg.fields.images"
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :hasSun="content.headImg.fields.hasSun"
      />
    </div>
    <div class="page-content">
      <div class="hotel-intro">
        <IntroText :content="content.introduction" />
      </div>
      <div class="hotel-restaurant-wrapper">
        <HeadImgSection
          :image="content.restaurantHeadImg.fields.image"
          :headline="content.restaurantHeadImg.fields.headline"
          :subHeadline="content.restaurantHeadImg.fields.subHeadline"
        />
        <HotelRestaurant />
      </div>
      <div class="hotel-wellness-wrapper">
        <HeadImgSection
          :image="content.wellnessHeadImg.fields.image"
          :headline="content.wellnessHeadImg.fields.headline"
          :subHeadline="content.wellnessHeadImg.fields.subHeadline"
        />
        <HotelWellness />
      </div>
      <div class="hotel-rooms-wrapper">
        <HeadImgSection
          :image="content.roomsHeadImg.fields.image"
          :headline="content.roomsHeadImg.fields.headline"
          :subHeadline="content.roomsHeadImg.fields.subHeadline"
        />
        <HotelRooms />
      </div>
    </div>
  </div>
</template>

<script>
import HeadImgLarge from '@/components/_shared/HeadImgLarge/HeadImgLarge';
import IntroText from '@/components/_shared/IntroText/IntroText';
import HeadImgSection from '@/components/_shared/HeadImgSection/HeadImgSection';
import HotelRestaurant from '@/components/Hotel/HotelRestaurant/HotelRestaurant';
import HotelWellness from '@/components/Hotel/HotelWellness/HotelWellness';
import HotelRooms from '@/components/Hotel/HotelRooms/HotelRooms';

export default {
  name: 'Hotel',
  components: {
    HotelRooms,
    HotelWellness,
    HeadImgSection,
    HeadImgLarge,
    IntroText,
    HotelRestaurant
  },
  computed: {
    content () {
      return this.$store.state.pageHotelStore.content[0];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "Hotel";
</style>
