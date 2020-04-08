<template>
  <transition name="zoom-in-up">
    <div
      v-if="opened"
      class="request-item-template box-shadow"
      :class="{opened}"
    >
      <div class="request-item-template-rows left">
        <div class="request-item-template-slot">
          <slot name="left"></slot>
        </div>
        <img class="request-item-template-sun" src="/_shared/sun.jpg" />
      </div>
      <div class="request-item-template-rows right">
        <h2>{{headline}}</h2>
        <div class="request-item-template-slot">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'RequestItemTemplate',
  props: {
    headline: {
      type: String,
      required: true
    },
    opened: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestItemTemplate';
</style>
