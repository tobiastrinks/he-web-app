<template>
    <div class="nav-language">
      <div class="nav-language-icon"
        v-for="(locale, key) in $store.state.locales"
        :key="key"
        v-show="$store.state.locale !== locale"
      >
        <img class="nav-language-icon-img" :src="`svg/${locale}.svg`" @click="setLocale(locale)" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'NavLanguage',
  methods: {
    setLocale (newLocale) {
      this.$store.commit('SET_LANG', newLocale);
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'NavLanguage';
</style>
