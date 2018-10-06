<template>
  <div class="offers">
    <HeadImg
      :headline="content.headImg.fields.headline"
      :sub-headline="content.headImg.fields.subHeadline"
      :image="content.headImg.fields.image"
    />
    <div class="offers-main-items">
      <div
        class="offers-item"
        v-for="(offer, index) in content.mainOffers.map(item => item.fields)"
        :key="index"
      >
        <Offer
          :image="offer.image"
          :imageAlignLeft="offer.imageAlignLeft"
          :headline="offer.headline"
          :subHeadline="offer.subHeadline"
          :description="offer.description"
          :button="offer.button"
          :buttonLink="offer.buttonLink"
        />
      </div>
    </div>
    <p class="offers-other-items-headline">
      {{content.otherOffersHeadline}}
    </p>
    <div class="offers-other-items">
      <div
        class="offers-item"
        v-for="(offer, index) in content.otherOffers.map(item => item.fields)"
        :key="index"
      >
        <Offer
          :image="offer.image"
          :imageAlignLeft="offer.imageAlignLeft"
          :headline="offer.headline"
          :subHeadline="offer.subHeadline"
          :description="offer.description"
          :button="offer.button"
          :buttonLink="offer.buttonLink"
        />
      </div>
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

export default {
  name: 'Offers',
  components: {IntlText, ButtonSt, LocaleLink, Offer, HeadImg},
  data () {
    return {
      routes
    };
  },
  computed: {
    offersStore () { return this.$store.state.pageOffersStore; },
    content () { return this.offersStore.content[0]; }
  }
};
</script>

<style scoped lang="scss">
  @import "Offers";
</style>
