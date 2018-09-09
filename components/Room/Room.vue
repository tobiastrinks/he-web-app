<template>
    <div class="room">
      <div class="room-head">
        <ButtonSt class="room-back-button" to="/zimmer-und-preise" arrow="left">
          <IntlText id="room.backToRoomsTop" />
        </ButtonSt>
        <h1 class="room-headline">{{headline}}</h1>
        <LocaleLink class="room-back-button-mobile" to="/zimmer-und-preise">
          <FontAwesomeIcon class="room-back-button-mobile-icon" :icon="['fas', 'chevron-left']" />
          <IntlText id="room.backToRoomsTop" />
        </LocaleLink>
      </div>
      <div class="room-images">
        <RoomSlider :images="room.images" />
      </div>
      <RoomInfo
        :ground-plan-image="room.groundPlan"
        :description="room.description"
        :minPrice="minPrice"
      />
      <RoomPrices
        :room="room"
      />
      <div class="room-request">
        <ButtonSt to="/anfragen" class="room-request-button">
          <IntlText id="room.requestNow" />
        </ButtonSt>
        <LocaleLink to="/zimmer-und-preise">
          <IntlText id="room.backToRoomsBottom" class="room-request-overview-button hover-scale" />
        </LocaleLink>
      </div>
      <div class="room-suggestions" v-if="suggestedRoom">
        <p class="room-suggestions-headline">
          <IntlText id="room.suggestion.headline" />
        </p>
        <OfferPane
          :cover="suggestedRoom.images[0]"
          :headline="suggestedRoom.name"
          :description="suggestedRoom.description"
          :button="$t('room.suggestion.button')"
          :buttonLink="`/zimmer-und-preise${suggestedRoom.route}`"
        />
      </div>
    </div>
</template>

<script>
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import RoomSlider from '@/components/Room/RoomSlider/RoomSlider';
import RoomInfo from '@/components/Room/RoomInfo/RoomInfo';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import RoomPrices from '@/components/Room/RoomPrices/RoomPrices';
import OfferPane from '@/components/_shared/OfferPane/OfferPane';

export default {
  name: 'Room',
  components: {OfferPane, RoomPrices, LocaleLink, RoomSlider, RoomInfo, IntlText, ButtonSt},
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
      const priceHp = this.room.priceHp;
      const priceHpJan = priceHp.map(item => { return item.fields.priceJan; });

      return priceHpJan.sort()[0];
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
  }
};
</script>

<style scoped lang="scss">
  @import 'Room';
</style>
