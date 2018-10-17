<template>
  <div class="room-prices-notes">
    <vue-markdown>
      {{ notes }}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RoomPricesNotes',
  components: { VueMarkdown },
  props: {
    notes: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RoomPricesNotes";
</style>
