<template>
  <div class="room-prices-table-mobile">
    <div
      class="room-prices-table-mobile-season"
      v-for="(season, index)  in seasons"
      :key="index"
    >
      <p class="room-prices-table-mobile-season-label">
        <IntlText :id="`room.prices.season.${season.labelId}`" />
      </p>
      <table class="room-prices-table-mobile-season-prices">
        <tbody>
        <tr class="room-prices-table-mobile-season-prices-line">
          <td class="room-prices-table-mobile-season-prices-td">
            <span>
              <IntlText id="room.prices.priceNormal" />
            </span>
          </td>
          <td class="room-prices-table-mobile-season-prices-td">
            <span>
              {{$n(pricesNormal[index], 'currency')}}
            </span>
          </td>
        </tr>
        <tr class="room-prices-table-mobile-season-prices-line" v-show="type === priceTypes.HP">
          <td class="room-prices-table-mobile-season-prices-td">
            <span>
              {{$tc('room.prices.arrangement.value', season.arrangementMinDays, {minDays: season.arrangementMinDays})}}
            </span>
          </td>
          <td class="room-prices-table-mobile-season-prices-td">
            <span>
              {{$n(pricesArr[index], 'currency')}}
            </span>
          </td>
        </tr>
        <tr
          v-for="(earlyBird, earlyBirdIndex) in earlyBirds"
          :key="earlyBirdIndex"
          v-if="earlyBirdIndex === 0 && earlyBird.priceType === type && earlyBird.prices[index]"
          class="room-prices-table-mobile-season-prices-line"
        >
          <td class="room-prices-table-mobile-season-prices-td">
            <span class="room-prices-table-mobile-earlybird-label">
              <IntlText id="room.prices.earlyBird.label" />
            </span>
            <br />
            <span class="room-prices-table-mobile-earlybird-deadline">
              <IntlText
                id="room.prices.earlyBird.deadline"
                :values="{deadline: $d(new Date(earlyBird.deadline + 'T00:00:00'), 'short')}"
              />
            </span>
          </td>
          <td class="room-prices-table-mobile-season-prices-td">
            <span class="room-prices-table-large-earlybird-price">
              {{$n(earlyBird.prices[index], 'currency')}}
            </span>
          </td>
        </tr>
        </tbody>
      </table>
      <hr class="hr-short room-prices-table-mobile-season-hr" />
    </div>
  </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import {seasons} from '@/assets/config/hotelConfig';
import {priceTypes} from '@/components/Room/RoomPrices/constants';

export default {
  name: 'RoomPricesTableMobile',
  components: {IntlText},
  props: {
    type: {
      type: String,
      required: true
    },
    pricesArr: {
      type: Array,
      required: true
    },
    pricesNormal: {
      type: Array,
      required: true
    },
    earlyBirds: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      seasons,
      priceTypes
    };
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesTableMobile";
</style>
