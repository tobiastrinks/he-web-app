<template>
  <LocaleLink :to="to" :block="linkBlock">
    <div class="nav-item" :class="{marked, active}">
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
    },
    linkBlock: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    active () {
      return (this.$route.fullPath.indexOf(this.to) !== -1);
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'NavItem.scss';
</style>
