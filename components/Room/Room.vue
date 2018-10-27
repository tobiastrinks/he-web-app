<template>
    <div class="room">
      <div
        class="room-head"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-once="true"
      >
        <LocaleLink :to="routes.ROOMS">
          <ButtonSt class="room-back-button" arrow="left">
            <IntlText id="room.backToRoomsTop" />
          </ButtonSt>
        </LocaleLink>
        <h1 class="room-headline">{{headline}}</h1>
        <LocaleLink class="room-back-button-mobile" :to="routes.ROOMS">
          <FontAwesomeIcon class="room-back-button-mobile-icon" :icon="['fas', 'chevron-left']" />
          <IntlText id="room.backToRoomsTop" />
        </LocaleLink>
      </div>
      <div
        class="room-images"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <RoomSlider :images="room.images" />
      </div>
      <RoomInfo
        :ground-plan-image="room.groundPlan"
        :description="room.description"
        :minPrice="minPrice"
        @clickRequest="prepareRequest"
      />
      <RoomPrices
        :room="room"
      />
      <div
        class="room-request"
        data-aos="zoom-in-down"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <LocaleLink :to="routes.REQUEST" @click="prepareRequest">
          <ButtonSt class="room-request-button">
            <IntlText id="room.requestNow" />
          </ButtonSt>
        </LocaleLink>
        <br />
        <LocaleLink :to="routes.ROOMS">
          <IntlText id="room.backToRoomsBottom" class="room-request-overview-button hover-scale" />
        </LocaleLink>
      </div>
      <div class="room-suggestions" v-if="suggestedRoom">
        <p class="room-suggestions-headline">
          <IntlText id="room.suggestion.headline" />
        </p>
        <Offer
          :image="suggestedRoom.images[0]"
          :headline="suggestedRoom.name"
          :description="suggestedRoom.description"
          :button="$t('room.suggestion.button')"
          :buttonLink="`/zimmer-und-preise${suggestedRoom.route}`"
        />
      </div>
    </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import {entryPoints} from '@/components/Request/constants';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import RoomSlider from '@/components/Room/RoomSlider/RoomSlider';
import RoomInfo from '@/components/Room/RoomInfo/RoomInfo';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import RoomPrices from '@/components/Room/RoomPrices/RoomPrices';
import Offer from '@/components/_shared/Offer/Offer';

export default {
  name: 'Room',
  components: {Offer, RoomPrices, LocaleLink, RoomSlider, RoomInfo, IntlText, ButtonSt},
  data: () => {
    return {
      routes
    };
  },
  computed: {
    room () {
      const content = this.$store.state.roomsStore.content;
      const rooms = content.filter(roomItem =>
        roomItem.route.replace('/', '') === this.$route.params.room
      );
      return rooms[0];
    },
    headline () {
      return this.room.name.toUpperCase();
    },
    minPrice () {
      const prices = this.room.prices.slice();
      const maxYearPrice = prices.sort((a, b) => a.fields.year < b.fields.year ? 1 : -1)[0];

      return maxYearPrice.fields.janUf;
    },
    suggestedRoom () {
      const rooms = this.$store.state.roomsStore.content;
      const id = this.room.suggestionId;
      if (id) {
        const result = rooms.filter(room => room.id === id);
        if (result.length) {
          return result[0];
        }
      }
    }
  },
  methods: {
    prepareRequest () {
      this.$store.commit('pageRequestStore/setEntryPoint', entryPoints.ROOM);
      this.$store.commit('pageRequestStore/setRoom', this.room);
    }
  },
  mounted () {
    this.$ga.page(this.$router);
  }
};
</script>

<style scoped lang="scss">
  @import 'Room';
</style>
