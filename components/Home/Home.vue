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
      <HomeOfferMini
        v-show="homeStore.offerMiniOpen"
        @close="$store.commit('pageHomeStore/hideOfferMini')"
        :headline="miniOffer.headline"
        :description="miniOffer.description"
        :button="miniOffer.button"
        :buttonLink="miniOffer.buttonLink"
      />
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

export default {
  components: {
    HomeOfferMini,
    HomeOverview,
    HomeFocus,
    IntroText,
    HeadImgLarge
  },
  computed: {
    homeStore () { return this.$store.state.pageHomeStore; },
    content () { return this.homeStore.content[0]; },
    miniOffer () {
      const miniOffers = this.content.miniOffers;
      if (miniOffers.length) {
        return miniOffers.map(item => item.fields)[0];
      }
    }
  },
  mounted () {
    this.$store.commit('navStore/enableOpacity');
  }
};
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
