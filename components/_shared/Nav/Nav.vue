<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-logo">
        <nuxt-link to="/">
          <ThumborImage
            :store="content.logo"
            :dimensions="{
              sm: [300,0],
              md: [400,0],
              lg: [500,0]
            }"
          />
        </nuxt-link>
      </div>
      <div class="nav-text">
        <NavItem intlId="nav.items.hotel" to="/hotel" />
        <NavItem intlId="nav.items.rooms" to="/zimmer-und-preise" />
        <NavItem intlId="nav.items.restaurant" to="/restaurant" />
        <NavItem intlId="nav.items.arrangements" to="/kurzulaub" />
        <NavItem intlId="nav.items.contact" to="/kontakt-und-anreise" />
      </div>
    </div>
    <div class="nav-right">
      <NavLanguage />
      <NavItem intlId="nav.items.request" to="/buchungsanfrage" :marked="true" />
    </div>
  </div>
</template>

<script>
import ThumborImage from '~/components/_shared/ThumborImage/ThumborImage';
import NavItem from './NavItem/NavItem';
import NavLanguage from './NavLanguage/NavLanguage';

export default {
  name: 'Nav',
  components: {
    ThumborImage,
    NavItem,
    NavLanguage
  },
  computed: {
    store () { return this.$store.state.navStore; },
    content () { return this.store.content; }
  }
};
</script>

<style scoped lang="scss">
  @import 'Nav';
</style>
