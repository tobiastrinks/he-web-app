<template>
  <div class="nav" :class="{noOpacity}">
    <div class="nav-left">
      <div class="nav-logo">
        <LocaleLink to="/">
          <ThumborImage
            :store="content.logo"
            :dimensions="{
              sm: [300,0],
              md: [400,0],
              lg: [500,0]
            }"
          />
        </LocaleLink>
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
      <NavLocale />
      <NavItem intlId="nav.items.request" to="/buchungsanfrage" :marked="true" />
    </div>
  </div>
</template>

<script>
import ThumborImage from '~/components/_shared/ThumborImage/ThumborImage';
import LocaleLink from '~/components/_shared/LocaleLink/LocaleLink';
import NavItem from './NavItem/NavItem';
import NavLocale from './NavLocale/NavLocale';

export default {
  name: 'Nav',
  components: {
    ThumborImage,
    LocaleLink,
    NavItem,
    NavLocale
  },
  data: () => {
    return {
      noOpacity: false
    };
  },
  computed: {
    store () { return this.$store.state.navStore; },
    content () { return this.store.content; }
  },
  methods: {
    handleScroll () {
      this.noOpacity = (window.scrollY > 0);
    }
  },
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'Nav';
</style>
