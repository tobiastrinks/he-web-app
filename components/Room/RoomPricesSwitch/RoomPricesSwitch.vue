<template>
    <div class="room-prices-switch">
      <span class="room-prices-switch-item"
            v-for="(label, index) in labels || values"
            :key="index"
            :class="{active: values[index] === active}"
            @click="setSwitch(index)"
      >
        {{label}}
      </span>
    </div>
</template>

<script>
import {setLocalStorage} from '~/assets/js/cachingStoreHelper';

export default {
  name: 'RoomPricesSwitch',
  props: {
    storeMutation: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    active: {
      required: true
    },
    labels: {
      type: Array
    },
    localStorageKey: {
      type: String
    }
  },
  methods: {
    setSwitch (index) {
      const value = this.values[index];
      if (this.localStorageKey) {
        setLocalStorage(this.localStorageKey, value);
      }
      this.$store.commit(this.storeMutation, value);
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomPricesSwitch';
</style>
