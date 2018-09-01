<template>
  <div>
    <div class="page-head">
      <HeadImgLarge
        v-if="content !== null"
        :images="content.headImg.fields.images"
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
      />
    </div>
    <div class="page-content">
      <div class="home-intro">
        <div class="home-stars">
          <img src="/home/stars.png" />
        </div>
        <IntroText :content="content.introduction" />
      </div>
      <HomeOverview :items="content.overviewItems" />
    </div>
  </div>
</template>

<script>
import HeadImgLarge from '@/components/_shared/HeadImgLarge/HeadImgLarge';
import IntroText from '@/components/_shared/IntroText/IntroText';
import HomeOverview from '@/components/Home/HomeOverview/HomeOverview';

export default {
  components: {
    HomeOverview,
    IntroText,
    HeadImgLarge
  },
  computed: {
    content () { return this.$store.state.pageHomeStore.content; }
  }
};
</script>

<style scoped lang="scss">
  @import 'Home';
</style>
