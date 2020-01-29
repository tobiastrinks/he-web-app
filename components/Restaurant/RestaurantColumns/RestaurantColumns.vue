<template>
  <div class="restaurant-columns">
    <div class="restaurant-columns-portraet">
      <ThumborImage
        :store="content.imgPortraet"
        :dimensions="{
                mo: [260, 0],
                xl: [360, 0]
              }"
      />
    </div>
    <div class="restaurant-columns-text">
      <RichTextRenderer :document="content.text" />
      <div class="restaurant-columns-text-button">
        <LocaleLink :to="content.buttonLink">
          <ButtonSt>
            {{ content.buttonText }}
          </ButtonSt>
        </LocaleLink>
      </div>
    </div>
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

export default {
  name: 'RestaurantColumns',
  components: {ButtonSt, LocaleLink, ThumborImage, RichTextRenderer},
  computed: {
    content () {
      return this.$store.state.pageRestaurantStore.content[0];
    }
  }
};
</script>

<style lang="scss">
  @import "RestaurantColumns";
</style>
