<template>
  <div class="request-dates-offers">
    <p class="request-dates-offers-headline">
      <IntlText id="request.dates.offers.headline" />
    </p>
    <div class="request-dates-offers-items checkbox-wrapper">
      <div
        v-for="(offer, index) in offers"
        :key="index"
        class="checkbox-item"
      >
        <input
          :id="offer.store.name"
          type="checkbox"
          v-model="offer.value"
          @change="updateStore"
        />
        <label :for="offer.store.name">
          {{offer.store.label}}
        </label>
      </div>
    </div>
    <p class="request-dates-offers-info">
      <IntlText id="request.dates.offers.infoPrefix" />
      <span class="request-dates-offers-info-link">
        <LocaleLink :to="routes.OFFERS">
          <IntlText id="request.dates.offers.infoLink" />
        </LocaleLink>
      </span>
    </p>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'RequestDatesOffers',
  components: {LocaleLink, IntlText},
  data () {
    return {
      routes,
      offers: []
    };
  },
  computed: {
    content () {
      return this.$store.state.pageRequestStore.content[0];
    }
  },
  methods: {
    updateStore () {
      const selectedOffers = this.offers.filter(offer => offer.value).map(offer => offer.store.name);
      this.$store.commit('pageRequestStore/setSelectedOffers', selectedOffers);
    }
  },
  created () {
    this.offers = this.content.offers.map(offer => {
      return {
        store: offer.fields,
        value: null
      };
    });
  }
};
</script>

<style lang="scss" scoped>
  @import "RequestDatesOffers";
</style>
