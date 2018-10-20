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
    <div
      v-if="bookingConditionContent.note"
      v-show="showConditions"
      class="room-prices-conditions-notes"
    >
      <vue-markdown>
        {{bookingConditionContent.note}}
      </vue-markdown>
    </div>
  </div>
</template>

<script>
import RoomPricesConditionsList from '@/components/Room/RoomPricesConditionsList/RoomPricesConditionsList';
import RoomPricesConditionsTable from '@/components/Room/RoomPricesConditionsTable/RoomPricesConditionsTable';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RoomPricesConditions',
  components: {
    RoomPricesConditionsTable,
    RoomPricesConditionsList,
    VueMarkdown
  },
  computed: {
    bookingConditionContent () {
      return this.$store.state.bookingConditionsStore.content[0];
    },
    bookingConditionTables () {
      const tables = this.bookingConditionContent.tables;

      if (tables) {
        return tables.map(table => table.fields);
      } else {
        return [];
      }
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
