<template>
  <button @click="onClick" class="button" :class="{hasArrow: arrow, inverted, disabled}">
    <FontAwesomeIcon :icon="['fas', 'chevron-left']" class="button-arrow left" v-if="arrow === 'left'" />
    <span class="button-text">
      <slot></slot>
    </span>
    <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="button-arrow right" v-if="arrow === 'right'" />
  </button>
</template>

<script>
import LocaleLink from '~/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'ButtonSt',
  components: {
    LocaleLink
  },
  props: {
    arrow: {
      type: String,
      default: null
    },
    inverted: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('click');
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'ButtonSt';
</style>
