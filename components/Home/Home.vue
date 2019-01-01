<template>
  <div class="home">
    <div class="page-head">
      <HeadImgLarge
        v-if="content !== null"
        :images="content.headImg.fields.images"
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :has-sun="content.headImg.fields.hasSun"
      />
    </div>
    <div class="page-content">
      <div v-if="miniOffers && miniOffers.length > 0" class="home-offer-mini-items">
        <div
          v-for="position in ['left', 'right', 'other']"
          :key="position"
          :class="`home-offer-mini-items-${position}`"
        >
          <HomeOfferMini
            v-for="(miniOffer, index) in miniOffers"
            v-if="position === miniOffer.position && miniOffer.template !== 'default'"
            :key="index"
            :show="homeStore.offerMiniOpen && homeStore.offerMiniOpen[index]"
            @close="$store.commit('pageHomeStore/hideOfferMini', index)"
            :template="miniOffer.template"
            :headline="miniOffer.headline"
            :description="miniOffer.description"
            :button="miniOffer.button"
            :buttonLink="miniOffer.buttonLink"
            :data-aos="position === 'left' ? 'fade-right' : 'fade-left'"
            data-aos-duration="1000"
            :data-aos-delay="1000 * (index + 1)"
            data-aos-once="true"
          />
        </div>
      </div>
      <div class="home-intro">
        <div class="home-stars">
          <img src="/home/stars.png" />
        </div>
        <IntroText :content="content.introduction" />
      </div>
      <HomeOverview :items="content.overviewItems" />
      <HomeFocus />
    </div>
  </div>
</template>

<script>
import HeadImgLarge from '@/components/_shared/HeadImgLarge/HeadImgLarge';
import IntroText from '@/components/_shared/IntroText/IntroText';
import HomeOverview from '@/components/Home/HomeOverview/HomeOverview';
import HomeFocus from '@/components/Home/HomeFocus/HomeFocus';
import HomeOfferMini from '@/components/Home/HomeOfferMini/HomeOfferMini';
import HomeOfferMiniNewYearsEve from '@/components/Home/HomeOfferMiniNewYearsEve/HomeOfferMiniNewYearsEve';

export default {
  name: 'Home',
  components: {
    HomeOfferMini,
    HomeOfferMiniNewYearsEve,
    HomeOverview,
    HomeFocus,
    IntroText,
    HeadImgLarge
  },
  computed: {
    homeStore () { return this.$store.state.pageHomeStore; },
    content () { return this.homeStore.content[0]; },
    miniOffers () {
      const miniOffers = this.content.miniOffers;
      if (miniOffers && miniOffers.length) {
        return miniOffers.map(item => item.fields).slice().sort((a, b) =>
          a.index === b.index ? 0 : a.index > b.index ? 1 : -1
        );
      } else {
        return [];
      }
    }
  },
  mounted () {
    this.$ga.page(this.$router);
    this.$store.commit('navStore/enableOpacity');
  }
};
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
