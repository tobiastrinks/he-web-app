<template>
    <div class="text-section">
      <p class="text-section-headline">
        <slot name="headline"></slot>
      </p>
      <article class="text-section-article">
        <slot name="article"></slot>
      </article>
      <hr v-if="!hideDelimiter" class="text-section-delimiter hr-short" />
    </div>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    hideDelimiter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import "TextSection";
</style>
