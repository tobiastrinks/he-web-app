<template>
  <div>
    <LocaleLink :to="to">
      <button class="button" :class="{hasArrow: arrow}">
        <FontAwesomeIcon :icon="['fas', 'chevron-left']" class="button-arrow left" v-if="arrow === 'left'" />
        <span class="button-text">
          <slot></slot>
        </span>
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="button-arrow right" v-if="arrow === 'right'" />
      </button>
    </LocaleLink>
  </div>
</template>

<script>
import LocaleLink from '~/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'ButtonSt',
  components: {
    LocaleLink
  },
  props: {
    to: {
      type: String,
      required: true
    },
    arrow: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'ButtonSt';
</style>
