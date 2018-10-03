<template>
    <div class="room-prices-table">
      <div class="room-prices-table-large">
        <table>
          <tbody>
            <tr class="room-prices-table-large-line">
              <td class="room-prices-table-large-td">
                <IntlText id="room.prices.season.label" />
              </td>
              <td
                class="room-prices-table-large-td"
                v-for="(seasonLabelId, key) in seasons.map(season => { return season.labelId; })"
                :key="key"
              >
                <IntlText :id="`room.prices.season.${seasonLabelId}`" />
              </td>
            </tr>
            <tr class="room-prices-table-large-line border-bottom">
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
                  {{$n(price, 'currency')}}
                </span>
              </td>
            </tr>
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
                  {{$n(price, 'currency')}}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
            </tbody>
          </table>
          <hr class="hr-short room-prices-table-mobile-season-hr" />
        </div>
      </div>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import {seasons} from '@/assets/config/hotelConfig';
import {priceTypes} from '@/components/Room/RoomPrices/constants';

export default {
  name: 'RoomPricesTable',
  components: {IntlText},
  props: {
    room: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  data () {
    return { priceTypes };
  },
  computed: {
    seasons () { return seasons; },
    pricesNormal () {
      const prices = this.room.prices;

      const pricesFilteredByYear = prices.filter(price => { return (price.fields.year === this.year); });
      if (pricesFilteredByYear.length === 1) {
        const price = pricesFilteredByYear[0].fields;

        // priceOrderedBySeasonArray
        return seasons.map(season => {
          if (this.type === priceTypes.HP) {
            return price[season.priceUfKey] + price.hp;
          } else {
            return price[season.priceUfKey];
          }
        });
      }
      return [];
    },
    pricesArr () {
      const pricesFilteredByYear = this.room.prices.filter(price => { return (price.fields.year === this.year); });
      if (pricesFilteredByYear.length === 1) {
        const price = pricesFilteredByYear[0].fields;

        // priceOrderedBySeasonArray
        return seasons.map(season => {
          return price[season.priceArrKey];
        });
      }
      return [];
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomPricesTable';
</style>
