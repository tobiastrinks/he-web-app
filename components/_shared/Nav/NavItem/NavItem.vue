<template>
  <LocaleLink :to="to">
    <div class="nav-item" :class="{marked}">
      <IntlText
        :id="intlId"
      />
    </div>
  </LocaleLink>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'NavItem',
  components: {
    LocaleLink,
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
