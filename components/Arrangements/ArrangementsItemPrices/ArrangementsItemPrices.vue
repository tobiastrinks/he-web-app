<template>
    <div class="arrangements-item-prices">
      <div class="arrangements-item-prices-years">
          <span
            v-for="(year, index) in years"
            :key="index"
            class="arrangements-item-prices-years-item hover-scale"
            :class="{active: activeYear === year}"
            @click="$emit('setYear', year)"
          >
            {{year}}
          </span>
      </div>
      <div class="arrangements-item-prices-bookable">
        <ArrangementsItemBookability :arrangement="arrangement" />
      </div>
      <p class="arrangements-item-prices-format">
        <IntlText id="arrangements.item.priceFormat" />
      </p>
      <div class="arrangements-item-prices-table">
        <table>
          <tbody>
            <tr
              v-for="(room, index) in rooms"
              :key="index"
              class="arrangements-item-prices-table-tr"
            >
              <td class="arrangements-item-prices-table-td">
                {{room.nameShort}}
              </td>
              <td class="arrangements-item-prices-table-td">
                <Price v-if="getRoomPrice(room.prices, activeYear)">
                  <span>{{$t('global.fromLabel')}}</span>
                  {{getRoomPrice(room.prices, activeYear)}}
                </Price>
                <IntlText v-else id="arrangements.item.noPrice" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import ArrangementsItemBookability from '@/components/Arrangements/ArrangementsItemBookability/ArrangementsItemBookability';
import Price from '@/components/_shared/Price/Price';

export default {
  name: 'ArrangementsItemServices',
  components: {Price, ArrangementsItemBookability, ButtonSt, IntlText},
  props: {
    arrangement: {
      type: Object,
      required: true
    },
    activeYear: {
      type: String,
      required: true
    },
    years: {
      type: Array,
      required: true
    }
  },
  computed: {
    rooms () {
      return this.$store.state.roomsStore.content;
    }
  },
  methods: {
    getRoomPrice (prices) {
      const price = prices.filter(price => price.fields.year.toString() === this.activeYear)[0];
      return Math.ceil(price.fields[this.arrangement.priceKey]);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "ArrangementsItemPrices";
</style>
