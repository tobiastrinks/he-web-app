<template>
    <div class="home-overview-item" :class="{isImageAlignLeft}">
      <div
        class="home-overview-item-row img"
        :data-aos="(isImageAlignLeft) ? 'fade-right' : 'fade-left'"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <ThumborImage
          :store="imgStore"
          :dimensions="{
            mo: [600,0],
            sm: [900,0],
            xl: [1000,0]
          }"
          :cover="true"
        />
      </div>
      <div
        class="home-overview-item-row text"
        :data-aos="(isImageAlignLeft) ? 'fade-left' : 'fade-right'"
        data-aos-duration="1000"
        data-aos-delay="800"
        data-aos-once="true"
      >
        <div class="home-overview-item-text-center">
          <p class="home-overview-item-headline">{{headline}}</p>
          <hr class="hr-short" />
          <p class="home-overview-item-subheadline">{{subHeadline}}</p>
          <article class="home-overview-item-text">
            <vue-markdown>{{text}}</vue-markdown>
          </article>
        </div>
        <div class="home-overview-item-text-button">
          <LocaleLink :to="buttonLink">
            <ButtonSt>
              {{buttonText}}
            </ButtonSt>
          </LocaleLink>
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import VueMarkdown from 'vue-markdown';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'HomeOverviewItem',
  components: {
    LocaleLink,
    ButtonSt,
    ThumborImage,
    VueMarkdown
  },
  props: {
    imgStore: {
      type: Object,
      required: true
    },
    isImageAlignLeft: {
      type: Boolean,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    subHeadline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'HomeOverviewItem';
</style>
