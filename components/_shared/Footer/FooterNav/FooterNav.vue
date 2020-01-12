<template>
    <div class="footer-nav">
      <div class="footer-nav-content">
        <div class="footer-nav-item hover-scale">
          <LocaleLink :to="routes.CONTACT">
            <IntlText id="footer.contact" />
          </LocaleLink>
        </div>
        <span>-</span>
        <div class="footer-nav-item hover-scale">
          <LocaleLink :to="routes.IMPRINT">
            <IntlText id="footer.imprint" />
          </LocaleLink>
        </div>
        <span>-</span>
        <div class="footer-nav-item hover-scale">
          <LocaleLink :to="routes.DATAPROTECTION">
            <IntlText id="footer.dataProtection" />
          </LocaleLink>
        </div>
      </div>
      <div class="footer-nav-copyright">
        <IntlText id="footer.copyright" :values="{ year }" />
      </div>
    </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'FooterNav',
  components: {LocaleLink, IntlText},
  data () {
    return {
      routes
    };
  },
  computed: {
    year () {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped lang="scss">
  @import "FooterNav";
</style>
