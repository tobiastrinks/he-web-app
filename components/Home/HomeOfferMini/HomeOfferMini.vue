<template>
  <div
    class="home-offer-mini"
    :class="{closed: !show, alignRight}"
  >
    <div class="home-offer-mini-inner">
      <div class="home-offer-mini-close" @click="$emit('close')">
        <FontAwesomeIcon
          :icon="['fas', 'times']"
        />
      </div>
      <LocaleLink :to="buttonLink">
        <p class="home-offer-mini-headline">
          {{headline}}
        </p>
        <hr class="hr-short" />
        <p class="home-offer-mini-description">
          {{description}}
        </p>
      </LocaleLink>
      <div class="home-offer-mini-button">
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
  name: 'HomeOfferMini',
  components: {ButtonSt, LocaleLink},
  props: {
    show: {
      type: Boolean,
      required: true
    },
    alignRight: {
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
  @import "HomeOfferMini";
</style>
