<template>
    <div
      class="cookies"
      v-if="!$store.state.cookieBannerClosed"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-offset="-200"
      data-aos-delay="1000"
    >
      <div class="cookies-inner">
        <div class="cookies-text">
          <IntlText id="global.cookies" :values="{dataProtectionLink: routes.DATAPROTECTION}"/>
        </div>
        <span class="cookies-close" @click="closeCookieBanner">
          <FontAwesomeIcon
            :icon="['fas', 'times']"
          />
        </span>
      </div>
    </div>
</template>

<script>
import { routes } from '../../../assets/config/routesConfig';
import IntlText from '../IntlText/IntlText';

export default {
  name: 'Cookies',
  components: {IntlText},
  data () {
    return {
      routes
    };
  },
  methods: {
    closeCookieBanner () {
      window.localStorage.setItem('cookieBannerClosed', '1');
      this.$store.commit('setCookieBannerClosed', true);
    }
  },
  mounted () {
    const cookieBannerClosed = window.localStorage.getItem('cookieBannerClosed');
    if (!cookieBannerClosed) {
      this.$store.commit('setCookieBannerClosed', false);
    }
  }
};
</script>

<style lang="scss">
  @import "Cookies";
</style>
