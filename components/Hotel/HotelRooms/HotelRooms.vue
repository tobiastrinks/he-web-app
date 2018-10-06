<template>
  <div class="hotel-rooms">
    <div class="hotel-rooms-row hotel-rooms-text">
      <div class="hotel-rooms-text-content">
        <p class="hotel-rooms-text-content-headline">
          {{content.roomsHeadline}}
        </p>
        <hr class="hr-short" />
        <div class="hotel-rooms-text-content-description">
          {{content.roomsDescription}}
        </div>
      </div>
      <div class="hotel-rooms-text-button">
        <LocaleLink :to="routes.ROOMS">
          <ButtonSt>{{content.roomsButtonTitle}}</ButtonSt>
        </LocaleLink>
      </div>
    </div>
    <div class="hotel-rooms-row hotel-rooms-image">
      <ThumborImage
        :store="content.roomsImage"
        :dimensions="{
          mo: [500, 0]
        }"
        :cover="true"
      />
    </div>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'HotelRooms',
  components: {LocaleLink, ThumborImage, ButtonSt},
  data: () => {
    return {
      routes
    };
  },
  computed: {
    content () {
      return this.$store.state.pageHotelStore.content[0];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "HotelRooms";
</style>
