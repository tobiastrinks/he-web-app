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
          <ButtonSt :label="button" :to="buttonLink" />
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
export default {
  name: 'OfferPane',
  components: {ButtonSt, ThumborImage},
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
