<template>
    <div class="offer-pane">
      <div class="offer-pane-row img">
        <ThumborImage
          :store="cover"
          :dimensions="{
            sm: [600, 0]
          }"
          :cover="true"
        />
      </div>
      <div class="offer-pane-row text">
        <div class="offer-pane-row-center">
          <p class="offer-pane-headline">
            {{headline}}
          </p>
          <article class="offer-pane-description">
            {{description}}
          </article>
        </div>
        <div class="offer-pane-button">
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
export default {
  name: 'OfferPane',
  components: {LocaleLink, ButtonSt, ThumborImage},
  props: {
    cover: {
      type: Object,
      required: true
    },
    headline: {
      type: String,
      required: true
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
  @import 'OfferPane';
</style>
