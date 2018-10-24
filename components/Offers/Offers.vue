<template>
  <div class="offers">
    <div class="page-head">
      <HeadImg
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :image="content.headImg.fields.image"
      />
    </div>
    <div class="offers-main-items">
      <OffersItem
        v-for="(offer, index) in content.mainOffers"
        :key="index"
        :offer="offer"
        :id="offer.fields.anchor"
      />
    </div>
    <p class="offers-other-items-headline">
      {{content.otherOffersHeadline}}
    </p>
    <div class="offers-other-items">
      <OffersItem
        v-for="(offer, index) in content.otherOffers"
        :key="index"
        :offer="offer"
        :id="offer.fields.anchor"
      />
    </div>
    <div class="offers-footer">
      <p class="offers-footer-note">
        {{content.footerNote}}
      </p>
      <div class="offers-footer-button">
        <LocaleLink :to="routes.ROOMS">
          <ButtonSt>
            <IntlText id="offers.roomButton" />
          </ButtonSt>
        </LocaleLink>
      </div>
    </div>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import Offer from '@/components/_shared/Offer/Offer';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import OffersItem from '@/components/Offers/OffersItem/OffersItem';

export default {
  name: 'Offers',
  components: {OffersItem, IntlText, ButtonSt, LocaleLink, Offer, HeadImg},
  data () {
    return {
      routes
    };
  },
  computed: {
    offersStore () { return this.$store.state.pageOffersStore; },
    content () { return this.offersStore.content[0]; }
  },
  methods: {
    scrollToAnchor () {
      const selectedAnchor = this.$route.query.s;
      if (selectedAnchor) {
        const selectedOffer = document.getElementById(selectedAnchor);
        window.setTimeout(() => {
          if (selectedOffer) {
            window.scrollTo(
              0,
              selectedOffer.offsetTop + (selectedOffer.offsetHeight / 2) - (window.innerHeight / 2)
            );
          }
        }, 500);
      }
    }
  },
  mounted () {
    this.scrollToAnchor();
  }
};
</script>

<style scoped lang="scss">
  @import "Offers";
</style>
