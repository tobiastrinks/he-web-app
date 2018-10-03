<template>
  <span @click.prevent="$emit('click')">
    <nuxt-link :to="getLocaleLink()">
      <slot></slot>
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LocaleLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    getLocaleLink () {
      const locale = this.$store.state.locale;
      const fullPath = this.$route.fullPath;

      // current path includes locale?
      if (fullPath.indexOf(`/${locale}/`) !== -1) {
        return `/${locale}${this.to}`;
      }
      return this.to;
    }
  }
};
</script>
