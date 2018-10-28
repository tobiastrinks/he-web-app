<template>
  <div class="nav" :class="{opacity: (opacity && !this.store.mobileOpen)}">
    <div class="nav-mobile-bar">
      <div class="nav-mobile-bar-icon" @click="switchMobileNav">
        <FontAwesomeIcon v-show="!this.store.mobileOpen" :icon="['fas', 'bars']" />
        <FontAwesomeIcon v-show="this.store.mobileOpen" :icon="['fas', 'times']" />
      </div>
      <LocaleLink :to="routes.HOME">
        <div class="nav-mobile-bar-logo">
          <ThumborImage
            v-if="content"
            :store="content.logoMobile"
            :dimensions="{
              mo: [100,0]
            }"
            :adjustToHeight="true"
          />
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
          <LocaleLink :to="routes.HOME">
            <ThumborImage
              v-if="content"
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
          <NavItem intlId="nav.items.hotel" :to="routes.HOTEL" />
          <NavItem intlId="nav.items.rooms" :to="routes.ROOMS" />
          <NavItem intlId="nav.items.offers" :to="routes.OFFERS" />
          <NavItem intlId="nav.items.contact" :to="routes.CONTACT" />
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-mobile-request-room">
          <NavItem intlId="nav.items.request" :to="routes.REQUEST" :marked="true" />
        </div>
      </div>
      <div class="nav-mobile-sun">
        <ThumborImage
          static-url="/_shared/sun.jpg"
          :dimensions="{
            mo: [300, 0],
            sm: [500, 0]
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
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
      couldHaveOpacity: true,
      mobileOpen: false,
      routes
    };
  },
  computed: {
    store () { return this.$store.state.navStore; },
    content () {
      const content = this.store.content;
      if (content) {
        return content[0];
      }
    },
    opacity () { return (this.couldHaveOpacity && this.store.opacityEnabled); }
  },
  methods: {
    handleScroll () {
      this.couldHaveOpacity = (window.scrollY === 0);
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
