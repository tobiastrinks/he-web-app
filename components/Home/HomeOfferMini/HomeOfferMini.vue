<template>
  <div
    v-if="template === templates.DEFAULT"
    class="home-offer-mini"
    :class="{closed: !show}"
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
    v-else-if="template === templates.CHRISTMAS"
    :show="show"
    @close="$emit('close')"
    :template="template"
    :description="description"
    :button="button"
    :buttonLink="buttonLink"
  />
  <HomeOfferMiniNewYearsEve
    v-else-if="template === templates.NEW_YEARS_EVE"
    :show="show"
    @close="$emit('close')"
    :template="template"
    :description="description"
    :button="button"
    :buttonLink="buttonLink"
  />
  <HomeOfferMiniEaster
    v-else-if="template === templates.EASTER"
    :show="show"
    @close="$emit('close')"
    :template="template"
    :headline="headline"
    :description="description"
    :button="button"
    :buttonLink="buttonLink"
  />
  <HomeOfferMiniRestaurant
    v-else-if="template === templates.RESTAURANT"
    :show="show"
    @close="$emit('close')"
    :template="template"
    :headline="headline"
    :button="button"
    :buttonLink="buttonLink"
  />
  <HomeOfferMiniVoucher
    v-else-if="template === templates.VOUCHER"
    :show="show"
    @close="$emit('close')"
    :template="template"
    :description="description"
    :button="button"
    :buttonLink="buttonLink"
  />
  <HomeOfferMiniStamp
    v-else
    class="home-offer-mini"
    :description="description"
  />
</template>

<script>
import { templates } from '@/components/Home/HomeOfferMini/constants';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import HomeOfferMiniChristmas from '@/components/Home/HomeOfferMiniChristmas/HomeOfferMiniChristmas';
import HomeOfferMiniNewYearsEve from '@/components/Home/HomeOfferMiniNewYearsEve/HomeOfferMiniNewYearsEve';
import HomeOfferMiniVoucher from '@/components/Home/HomeOfferMiniVoucher/HomeOfferMiniVoucher';
import HomeOfferMiniStamp from '@/components/Home/HomeOfferMiniStamp/HomeOfferMiniStamp';
import HomeOfferMiniEaster from '@/components/Home/HomeOfferMiniEaster/HomeOfferMiniEaster';
import HomeOfferMiniRestaurant from '@/components/Home/HomeOfferMiniRestaurant/HomeOfferMiniRestaurant';

export default {
  name: 'HomeOfferMini',
  components: {
    HomeOfferMiniRestaurant,
    HomeOfferMiniEaster,
    HomeOfferMiniStamp,
    HomeOfferMiniChristmas,
    HomeOfferMiniNewYearsEve,
    HomeOfferMiniVoucher,
    ButtonSt,
    LocaleLink
  },
  props: {
    show: {
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
