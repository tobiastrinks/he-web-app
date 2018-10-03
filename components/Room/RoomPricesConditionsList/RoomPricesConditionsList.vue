<template>
  <div class="room-prices-conditions-list">
    <ul class="room-prices-conditions-list-ul">
      <li
        v-for="(bookingConditionItem, index) in bookingConditionItems"
        :key="index"
        class="room-prices-conditions-list-li"
      >
        {{bookingConditionItem}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RoomPricesConditionsList',
  computed: {
    bookingConditionContent () {
      return this.$store.state.bookingConditionsStore.content[0];
    },
    bookingConditionItems () {
      return this.bookingConditionContent.items.map(item => item.fields.body);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesConditionsList";
</style>
