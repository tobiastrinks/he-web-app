<template>
  <div
    class="home-offer-mini home-offer-mini-christmas"
    :class="{closed: !show}"
  >
    <div class="home-offer-mini-inner home-offer-mini-christmas-inner">
      <div class="home-offer-mini-close" @click="$emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
        />
      </div>
      <LocaleLink :to="buttonLink">
        <p class="home-offer-mini-description home-offer-mini-christmas-description">
          {{description}}
        </p>
      </LocaleLink>
      <div class="home-offer-mini-button home-offer-mini-christmas-button">
        <LocaleLink :to="buttonLink">
          <ButtonSt :align-left="true">
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
  name: 'HomeOfferMiniChristmas',
  components: {ButtonSt, LocaleLink},
  props: {
    show: {
      type: Boolean,
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
  },
  computed: {
    homeStore () { return this.$store.state.pageHomeStore; }
  }
};
</script>

<style scoped lang="scss">
  @import "../HomeOfferMini/HomeOfferMini";
  @import "HomeOfferMiniChristmas";
</style>
