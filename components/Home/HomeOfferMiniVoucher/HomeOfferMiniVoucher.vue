<template>
  <div
    class="home-offer-mini home-offer-mini-voucher"
    :class="{closed: !show}"
  >
    <div class="home-offer-mini-inner home-offer-mini-voucher-inner">
      <div class="home-offer-mini-close" @click="$emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
        />
      </div>
      <LocaleLink :to="buttonLink">
        <div class="home-offer-mini-description">
          <vue-markdown :source="description" />
        </div>
      </LocaleLink>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HomeOfferMiniVoucher',
  components: {VueMarkdown, ButtonSt, LocaleLink},
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
  @import "HomeOfferMiniVoucher";
</style>
