<template>
  <div class="room-prices-conditions-list">
    <ul class="room-prices-conditions-list-ul">
      <li
        v-for="(bookingConditionItem, index) in bookingConditionItems"
        :key="index"
        class="room-prices-conditions-list-li"
      >
        <vue-markdown>{{bookingConditionItem}}</vue-markdown>
      </li>
    </ul>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RoomPricesConditionsList',
  components: {
    VueMarkdown
  },
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
