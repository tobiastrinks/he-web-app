<template>
    <div class="nav-locale">
      <div class="nav-locale-icon"
        v-for="(locale, key) in $store.state.locales"
        :key="key"
        v-show="$store.state.locale !== locale"
      >
        <nuxt-link :to="getSwitchLocaleUrl(locale)">
          <img class="nav-locale-icon-img" :src="`/svg/${locale}.svg`" />
        </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavLocale',
  methods: {
    getSwitchLocaleUrl (locale) {
      const route = this.$route;

      if (route.params.lang) {
        return route.fullPath.replace(`/${route.params.lang}`, `/${locale}`);
      }
      return `/${locale}${route.fullPath}`;
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'NavLocale';
</style>
