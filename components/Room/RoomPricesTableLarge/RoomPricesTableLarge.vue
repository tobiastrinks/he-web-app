<template>
  <div class="room-prices-table-large">
    <table>
      <tbody>
        <tr
          class="room-prices-table-large-line"
          :class="{'border-bottom': type !== priceTypes.HP}"
        >
          <td class="room-prices-table-large-td">
            <IntlText id="room.prices.season.label" />
          </td>
          <td
            class="room-prices-table-large-td"
            v-for="(season, key) in seasons"
            :key="key"
          >
            <IntlText :id="`room.prices.season.${season.labelId}`" />
          </td>
        </tr>
        <tr
          v-if="type === priceTypes.HP"
          class="room-prices-table-large-line border-bottom"
        >
          <td class="room-prices-table-large-td">
            <IntlText id="room.prices.arrangement.label" />
          </td>
          <td
            class="room-prices-table-large-td"
            v-for="(arrangementMinDays, key) in seasons.map(season => { return season.arrangementMinDays; })"
            :key="key"
          >
                  <span>
                    {{$tc('room.prices.arrangement.value', arrangementMinDays, {minDays: arrangementMinDays})}}
                  </span>
          </td>
        </tr>

        <!-- hp / uf -->
        <tr class="room-prices-table-large-line">
          <td class="room-prices-table-large-td">
            <IntlText id="room.prices.priceNormal" />
          </td>
          <td
            class="room-prices-table-large-td"
            v-for="(price, key) in pricesNormal"
            :key="key"
          >
            <span>
              <Price :note="price.note">{{price.value}}</Price>
            </span>
          </td>
        </tr>
        <!-- hp with arr -->
        <tr class="room-prices-table-large-line" v-show="type === priceTypes.HP">
          <td class="room-prices-table-large-td">
            <IntlText id="room.prices.priceArrangement" />
          </td>
          <td
            class="room-prices-table-large-td"
            v-for="(price, key) in pricesArr"
            :key="key"
          >
            <span>
              <Price :note="price.note">{{price.value}}</Price>
            </span>
          </td>
        </tr>
        <!-- early bird -->
        <tr
          v-for="(earlyBird, index) in earlyBirds"
          v-if="index === 0 && earlyBird.priceType === type"
          :key="index"
          class="room-prices-table-large-line"
        >
          <td class="room-prices-table-large-td">
            <span class="room-prices-table-large-earlybird-label">
              <IntlText id="room.prices.earlyBird.label" />
            </span>
            <br />
            <span class="room-prices-table-large-earlybird-deadline">
              <IntlText
                id="room.prices.earlyBird.deadline"
                :values="{deadline: $d(new Date(earlyBird.deadline + 'T00:00:00'), 'short')}"
              />
            </span>
          </td>
          <td
            class="room-prices-table-large-td"
            v-for="(price, key) in earlyBird.prices"
            :key="key"
          >
            <span v-if="price.value" class="room-prices-table-large-earlybird-price">
              <Price :note="price.note">{{price.value}}</Price>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import {priceTypes} from '@/components/Room/RoomPrices/constants';
import Price from '@/components/_shared/Price/Price';

export default {
  name: 'RoomPricesTableLarge',
  components: {Price, IntlText},
  props: {
    type: {
      type: String,
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
      priceTypes
    };
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesTableLarge";
</style>
