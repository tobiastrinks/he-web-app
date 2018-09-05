<template>
  <div class="nav" :class="{noOpacity: (noOpacity || this.store.mobileOpen)}">
    <div class="nav-mobile-bar">
      <div class="nav-mobile-bar-icon" @click="switchMobileNav">
        <FontAwesomeIcon v-show="!this.store.mobileOpen" :icon="['fas', 'bars']" />
        <FontAwesomeIcon v-show="this.store.mobileOpen" :icon="['fas', 'times']" />
      </div>
      <LocaleLink to="/">
        <div class="nav-mobile-bar-logo">
          <img :src="content.logoMobile.fields.file.url" />
        </div>
      </LocaleLink>
      <a href="tel:+4915224679363">
        <div class="nav-mobile-bar-icon">
          <FontAwesomeIcon :icon="['fas', 'phone']" />
        </div>
      </a>
    </div>
    <div class="nav-content" :class="{mobileOpen: this.store.mobileOpen}">
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
        <div class="nav-mobile-request-room">
          <NavItem intlId="nav.items.request" to="/buchungsanfrage" :marked="true" />
        </div>
      </div>
      <div class="nav-mobile-sun">
        <ThumborImage
          static-url="/_shared/sun-transparent.png"
          :dimensions="{
            sm: [500, 0]
          }"
        />
      </div>
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
      noOpacity: false,
      mobileOpen: false
    };
  },
  computed: {
    store () { return this.$store.state.navStore; },
    content () { return this.store.content; }
  },
  methods: {
    handleScroll () {
      this.noOpacity = (window.scrollY > 0);
    },
    switchMobileNav () {
      this.$store.commit('navStore/setMobileOpen', !this.store.mobileOpen);
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
