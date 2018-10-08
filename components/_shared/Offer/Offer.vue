<template>
  <div :id="anchor" class="offer" :class="{imageAlignLeft}">
    <div class="offer-row img">
      <ThumborImage
        :store="image"
        :dimensions="{
          mo: [500,0],
          sm: [900,0],
          xl: [1000,0]
        }"
        :cover="true"
      />
    </div>
    <div class="offer-row text">
      <div class="offer-row-center">
        <div class="offer-head">
          <p class="offer-headline">
            {{headline}}
          </p>
          <p v-if="subHeadline" class="offer-subheadline">
            {{subHeadline}}
          </p>
        </div>
        <article class="offer-description">
          <vue-markdown>
            {{description}}
          </vue-markdown>
        </article>
      </div>
      <div class="offer-button">
        <LocaleLink :to="buttonLink">
          <ButtonSt>{{button}}</ButtonSt>
        </LocaleLink>
      </div>
    </div>
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'Offer',
  components: {
    LocaleLink,
    ButtonSt,
    ThumborImage,
    VueMarkdown
  },
  props: {
    anchor: {
      type: String
    },
    image: {
      type: Object,
      required: true
    },
    imageAlignLeft: {
      type: Boolean,
      default: true
    },
    headline: {
      type: String,
      required: true
    },
    subHeadline: {
      type: String
    },
    description: {
      type: String,
      required: true
    },
    button: {
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
  @import 'Offer';
</style>
