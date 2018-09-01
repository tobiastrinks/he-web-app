<template>
  <div>
    <LocaleLink :to="to">
      <button class="button">{{label}}</button>
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
      type: String
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'ButtonSt';
</style>
