<template>
  <div
    class="home-offer-mini home-offer-mini-easter"
    :class="{closed: !show}"
  >
    <div class="home-offer-mini-inner home-offer-mini-easter-inner">
      <div class="home-offer-mini-close" @click="$emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
        />
      </div>
      <LocaleLink :to="buttonLink">
        <div class="home-offer-mini-description home-offer-mini-easter-description">
          <p class="home-offer-mini-easter-description-headline">
            {{ headline }}
          </p>
          <p>
            {{ description }}
          </p>
        </div>
      </LocaleLink>
    </div>
  </div>
</template>

<script>
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HomeOfferMiniEaster',
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
    description: {
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
  @import "HomeOfferMiniEaster";
</style>
