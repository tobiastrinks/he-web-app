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
      <div class="arrangements-item-prices-table">
        <table>
          <tr
            v-for="(room, index) in rooms"
            :key="index"
            class="arrangements-item-prices-table-tr"
          >
            <td class="arrangements-item-prices-table-td">
              {{room.nameShort}}
            </td>
            <td class="arrangements-item-prices-table-td">
              {{getRoomPrice(room.prices, activeYear)}}
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import ArrangementsItemBookability from '@/components/Arrangements/ArrangementsItemBookability/ArrangementsItemBookability';

export default {
  name: 'ArrangementsItemServices',
  components: {ArrangementsItemBookability, ButtonSt, IntlText},
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
      const value = price.fields[this.arrangement.priceKey];
      return this.$n(value, 'currency');
    }
  }
};
</script>

<style scoped lang="scss">
  @import "ArrangementsItemPrices";
</style>
