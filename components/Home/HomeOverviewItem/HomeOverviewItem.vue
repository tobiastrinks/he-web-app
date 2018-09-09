<template>
    <div class="home-overview-item" :class="{isImageAlignLeft}">
      <div class="home-overview-item-row img">
        <ThumborImage
          :store="imgStore"
          :dimensions="{
          sm: [500,0]
        }"
          :cover="true"
        />
      </div>
      <div class="home-overview-item-row text">
        <div class="home-overview-item-text-center">
          <p class="home-overview-item-headline">{{headline}}</p>
          <hr class="hr-short" />
          <p class="home-overview-item-subheadline">{{subHeadline}}</p>
          <article class="home-overview-item-text">
            <vue-markdown>{{text}}</vue-markdown>
          </article>
        </div>
        <div class="home-overview-item-text-button">
          <ButtonSt :to="buttonLink">
            {{buttonText}}
          </ButtonSt>
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import VueMarkdown from 'vue-markdown';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HomeOverviewItem',
  components: {
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
