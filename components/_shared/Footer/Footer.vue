<template>
  <div class="footer-wrapper">
    <div class="footer">
      <div class="footer-row">
        <p class="footer-row-line">
          <IntlText id="footer.company" />
        </p>
        <p class="footer-row-line">
          <IntlText id="footer.street" />
        </p>
        <p class="footer-row-line">
          <IntlText id="footer.city" />
        </p>
      </div>
      <div class="footer-row">
        <p class="footer-row-line">
          <IntlText id="footer.telephone.label" />
          <a :href="`tel:${$t('footer.telephone.link')}`">
            <IntlText id="footer.telephone.value" class="hover-scale" />
          </a>
        </p>
        <p class="footer-row-line">
          <IntlText id="footer.telefax.label" />
          <a :href="`tel:${$t('footer.telefax.link')}`">
            <IntlText id="footer.telefax.value" class="hover-scale" />
          </a>
        </p>
        <p class="footer-row-line">
          <IntlText id="footer.email.label" />
          <a :href="`mailto:${$t('footer.email.value')}`">
            <IntlText id="footer.email.value" class="hover-scale" />
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
