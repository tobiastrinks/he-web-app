<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer-row">
        <p class="footer-row-line">
          <IntlText id="global.company" />
        </p>
        <p class="footer-row-line">
          <IntlText id="global.street" />
        </p>
        <p class="footer-row-line">
          <IntlText id="global.city" />
        </p>
      </div>
      <div class="footer-row">
        <p class="footer-row-line">
          <IntlText id="global.telephone.label" />
          <a :href="`tel:${$t('global.telephone.link')}`">
            <IntlText id="global.telephone.value" class="hover-scale" />
          </a>
        </p>
        <p class="footer-row-line">
          <IntlText id="global.telefax.label" />
          <a :href="`tel:${$t('global.telefax.link')}`">
            <IntlText id="global.telefax.value" class="hover-scale" />
          </a>
        </p>
        <p class="footer-row-line">
          <IntlText id="global.email.label" />
          <a :href="`mailto:${$t('global.email.value')}`">
            <IntlText id="global.email.value" class="hover-scale" />
          </a>
        </p>
      </div>
      <FooterNav />
    </div>
  </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import FooterNav from './FooterNav/FooterNav';

export default {
  name: 'Footer',
  components: {LocaleLink, IntlText, FooterNav}
};
</script>

<style scoped lang="scss">
  @import "Footer";
</style>
