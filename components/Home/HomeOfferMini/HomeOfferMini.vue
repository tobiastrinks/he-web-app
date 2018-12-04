<template>
  <div
    v-if="template === templates.DEFAULT"
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
  <HomeOfferMiniChristmas
    v-else
    class="home-offer-mini"
    :show="show"
    :alignRight="alignRight"
    @close="$emit('close')"
    :template="template"
    :description="description"
    :button="button"
    :buttonLink="buttonLink"
  />
</template>

<script>
import { templates } from '@/components/Home/HomeOfferMini/constants';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import HomeOfferMiniChristmas from '@/components/Home/HomeOfferMiniChristmas/HomeOfferMiniChristmas';

export default {
  name: 'HomeOfferMini',
  components: {HomeOfferMiniChristmas, ButtonSt, LocaleLink},
  props: {
    show: {
      type: Boolean,
      required: true
    },
    alignRight: {
      type: Boolean,
      required: true
    },
    template: {
      type: String,
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
  data () {
    return {
      templates
    };
  },
  computed: {
    homeStore () { return this.$store.state.pageHomeStore; }
  }
};
</script>

<style scoped lang="scss">
  @import "HomeOfferMini";
</style>
