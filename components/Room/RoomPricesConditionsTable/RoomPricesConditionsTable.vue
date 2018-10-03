<template>
  <div class="room-prices-conditions-table">
    <p class="room-prices-conditions-table-headline">
      {{table.headline}}
    </p>
    <table>
      <tbody>
        <tr class="room-prices-conditions-table-tr">
          <td class="room-prices-conditions-table-td" v-for="(item, index) in table.trHead" :key="index">
            {{item}}
          </td>
        </tr>
        <tr class="room-prices-conditions-table-tr" v-for="(trItem, index) in trItems" :key="index">
          <td class="room-prices-conditions-table-td">
            <IntlText :id="trItem.intlId" />
          </td>
          <td class="room-prices-conditions-table-td" v-for="(tdItem, index) in trItem.tdItems" :key="index">
            {{$n(tdItem, 'currency')}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
export default {
  name: 'RoomPricesConditionsTable',
  components: {IntlText},
  props: {
    table: {
      type: Object,
      required: true
    }
  },
  computed: {
    trItems () {
      return [
        {
          intlId: 'room.prices.season.jan',
          tdItems: this.table.trJan
        },
        {
          intlId: 'room.prices.season.mar',
          tdItems: this.table.trMar
        },
        {
          intlId: 'room.prices.season.may',
          tdItems: this.table.trMay
        },
        {
          intlId: 'room.prices.season.jul',
          tdItems: this.table.trJul
        }
      ];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesConditionsTable";
</style>
