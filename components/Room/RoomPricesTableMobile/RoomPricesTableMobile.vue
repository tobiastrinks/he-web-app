<template>
  <div class="room-prices-table-mobile">
    <div
      v-if="!onlyOnRequest"
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
            <Price :note="pricesNormal[index].note">{{pricesNormal[index].value}}</Price>
          </td>
        </tr>
        <tr class="room-prices-table-mobile-season-prices-line" v-show="type === priceTypes.HP">
          <td class="room-prices-table-mobile-season-prices-td">
            <span>
              {{$tc('room.prices.arrangement.value', season.arrangementMinDays, {minDays: season.arrangementMinDays})}}
            </span>
          </td>
          <td class="room-prices-table-mobile-season-prices-td">
            <Price :note="pricesArr[index].note">{{pricesArr[index].value}}</Price>
          </td>
        </tr>
        <tr
          v-for="(earlyBird, earlyBirdIndex) in earlyBirds"
          :key="earlyBirdIndex"
          v-if="earlyBirdIndex === 0 && earlyBird.priceType === type && earlyBird.prices[index].value"
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
                :values="{deadline: getLocaleDateString(new Date(earlyBird.deadline + 'T00:00:00'))}"
              />
            </span>
          </td>
          <td class="room-prices-table-mobile-season-prices-td">
            <span class="room-prices-table-large-earlybird-price">
              <Price :note="earlyBird.prices[index].note">{{earlyBird.prices[index].value}}</Price>
            </span>
          </td>
        </tr>
        </tbody>
      </table>
      <hr class="hr-short room-prices-table-mobile-season-hr" />
    </div>
    <p v-if="onlyOnRequest" class="room-prices-table-mobile-only-on-request">
      <IntlText id="room.prices.onlyOnRequest" />
    </p>
  </div>
</template>

<script>
import { getLocaleDateString } from '@/assets/js/dateUtils';
import IntlText from '@/components/_shared/IntlText/IntlText';
import {priceTypes} from '@/components/Room/RoomPrices/constants';
import Price from '@/components/_shared/Price/Price';

export default {
  name: 'RoomPricesTableMobile',
  components: {Price, IntlText},
  props: {
    type: {
      type: String,
      required: true
    },
    onlyOnRequest: {
      type: Boolean,
      required: true
    },
    seasons: {
      type: Array,
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
      priceTypes,
      getLocaleDateString
    };
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesTableMobile";
</style>
