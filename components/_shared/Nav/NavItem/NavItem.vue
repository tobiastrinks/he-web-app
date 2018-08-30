<template>
  <nuxt-link :to="to">
    <div class="nav-item" :class="{marked}">
      <IntlText
        :id="intlId"
      />
    </div>
  </nuxt-link>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'NavItem',
  components: {
    IntlText
  },
  props: {
    intlId: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    marked: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'NavItem.scss';
</style>
