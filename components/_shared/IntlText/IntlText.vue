<template>
  <span v-html="$t(id, $store.state.locale, values)"></span>
</template>

<script>
export default {
  name: 'IntlText',
  props: {
    id: {
      type: String,
      required: true
    },
    values: {
      type: Object,
      default: () => { return {}; }
    }
  }
};
</script>
