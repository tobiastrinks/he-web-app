<template>
    <div class="request-item-template box-shadow" :class="{opened}">
      <div class="request-item-template-rows left">
        <div class="request-item-template-slot">
          <slot name="left"></slot>
        </div>
        <ThumborImage class="request-item-template-sun"
          static-url="/_shared/sun-transparent.png"
          :dimensions="{
            sm: [500, 0]
          }"
        />
      </div>
      <div class="request-item-template-rows right">
        <h2>{{headline}}</h2>
        <div class="request-item-template-slot">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '~/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'RequestItemTemplate',
  components: { ThumborImage },
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
