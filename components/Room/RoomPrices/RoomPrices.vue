<template>
    <div class="room-prices">
      <div class="room-prices-head">
        <div class="room-prices-head-row">
          <IntlText id="room.prices.perPersonAndDay" />
        </div>
        <div class="room-prices-head-row">
          <RoomPricesSwitch
            storeMutation="pageRoomStore/setPriceType"
            :values="[ priceTypes.HP, priceTypes.UF ]"
            :active="priceType"
            :labels="[ priceTypeLabels.HP, priceTypeLabels.UF ]"
            localStorageKey="room.prices.type"
          />
        </div>
        <div class="room-prices-head-row">
          <RoomPricesSwitch
            v-if="priceYearAvailable.length"
            storeMutation="pageRoomStore/setPriceYear"
            :values="priceYearAvailable"
            :active="priceYear"
            localStorageKey="room.prices.year"
          />
        </div>
      </div>
      <RoomPricesTable
        :room="room"
        :type="priceType"
        :year="priceYear"
      />
    </div>
</template>

<script>
import { priceTypes } from '@/components/Room/RoomPrices/constants';
import IntlText from '@/components/_shared/IntlText/IntlText';
import { getLocalStorage } from '@/assets/js/cachingStoreHelper';
import RoomPricesSwitch from '@/components/Room/RoomPricesSwitch/RoomPricesSwitch';
import RoomPricesTable from '@/components/Room/RoomPricesTable/RoomPricesTable';

export default {
  name: 'RoomPrices',
  components: {RoomPricesTable, RoomPricesSwitch, IntlText},
  props: {
    room: {
      type: Object,
      required: true
    }
  },
  data () {
    return { priceTypes };
  },
  computed: {
    priceType () { return this.$store.state.pageRoomStore.priceType; },
    priceTypeLabels () {
      return {
        HP: this.getPriceTypeLabel(priceTypes.HP),
        UF: this.getPriceTypeLabel(priceTypes.UF)
      };
    },
    priceYear () { return this.$store.state.pageRoomStore.priceYear; },
    priceYearAvailable () {
      const rooms = this.rooms;
      if (rooms.length) {
        const years = rooms[0].priceUf.map(priceItem => priceItem.fields.year);
        return years.filter((module, index, self) => {
          return self.indexOf(module) === index;
        }).sort();
      }
      return [];
    },
    rooms () { return this.$store.state.roomsStore.content; }
  },
  methods: {
    getPriceTypeLabel (id) {
      return this.$t(`room.prices.${id}`, this.$store.state.locale);
    }
  },
  beforeMount () {
    const mountPriceType = getLocalStorage('room.prices.type');
    if (mountPriceType) {
      this.$store.commit('pageRoomStore/setPriceType', mountPriceType, true);
    }

    const mountPriceYear = getLocalStorage('room.prices.year');
    if (mountPriceYear) {
      this.$store.commit('pageRoomStore/setPriceYear', mountPriceYear);
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomPrices';
</style>
