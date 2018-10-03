<template>
  <div class="room-prices-conditions" :class="{open: showConditions}">
    <div class="room-prices-conditions-headline hover-scale" @click="switchShowConditions">
      <FontAwesomeIcon
        class="room-prices-conditions-headline-icon"
        :icon="['fas', 'chevron-right']"
      />
      <span class="room-prices-conditions-headline-text">
        {{bookingConditionContent.headline}}
      </span>
    </div>
    <RoomPricesConditionsList v-show="showConditions" />
    <RoomPricesConditionsTable
      v-show="showConditions"
      v-for="(table, index) in bookingConditionTables"
      :key="index"
      :table="table"
    />
  </div>
</template>

<script>
import RoomPricesConditionsList from '@/components/Room/RoomPricesConditionsList/RoomPricesConditionsList';
import RoomPricesConditionsTable from '@/components/Room/RoomPricesConditionsTable/RoomPricesConditionsTable';
export default {
  name: 'RoomPricesConditions',
  components: {RoomPricesConditionsTable, RoomPricesConditionsList},
  computed: {
    bookingConditionContent () {
      return this.$store.state.bookingConditionsStore.content[0];
    },
    bookingConditionTables () {
      return this.bookingConditionContent.tables.map(table => table.fields);
    }
  },
  data () {
    return {
      showConditions: false
    };
  },
  methods: {
    switchShowConditions () {
      this.showConditions = !this.showConditions;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesConditions";
</style>
