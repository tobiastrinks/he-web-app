<template>
  <div
    class="home-offer-mini home-offer-mini-restaurant"
    :class="{closed: !show}"
  >
    <div class="home-offer-mini-inner home-offer-mini-restaurant-inner">
      <div class="home-offer-mini-close" @click="$emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
        />
      </div>
      <LocaleLink :to="buttonLink">
        <p class="home-offer-mini-description home-offer-mini-restaurant-description">
          {{headline}}
        </p>
      </LocaleLink>
      <div class="home-offer-mini-button home-offer-mini-restaurant-button">
        <LocaleLink :to="buttonLink">
          <ButtonSt>
            {{button}}
          </ButtonSt>
        </LocaleLink>
      </div>
    </div>
  </div>
</template>

<script>
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HomeOfferMiniRestaurant',
  components: {ButtonSt, LocaleLink},
  props: {
    show: {
      type: Boolean,
      required: true
    },
    headline: {
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
  },
  computed: {
    homeStore () { return this.$store.state.pageHomeStore; }
  }
};
</script>

<style scoped lang="scss">
  @import "../HomeOfferMini/HomeOfferMini";
  @import "HomeOfferMiniRestaurant";
</style>
