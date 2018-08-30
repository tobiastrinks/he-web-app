<template>
  <span v-html="$t(id, $store.state.locale)"></span>
</template>

<script>
export default {
  name: 'IntlText',
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>
