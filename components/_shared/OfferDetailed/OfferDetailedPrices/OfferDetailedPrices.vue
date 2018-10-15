<template>
  <div class="offer-detailed-prices">
    <OfferDetailedPricesItem
      v-for="(season, index) in seasons"
      :key="index"
      :bookability="season.bookability"
      :rooms="season.rooms"
      :prices="season.prices"
    />
    <p class="offer-detailed-prices-format">
      <IntlText id="offers.offerDetailed.priceFormat" />
    </p>
  </div>
</template>

<script>
import OfferDetailedPricesItem
  from '@/components/_shared/OfferDetailed/OfferDetailedPricesItem/OfferDetailedPricesItem';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'OfferDetailedPrices',
  components: {IntlText, OfferDetailedPricesItem},
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  computed: {
    seasons () {
      const seasons = [];

      for (let x = 1; x < 4; x++) {
        const season = {
          bookability: this.offer[`season${x}bookability`],
          rooms: this.offer[`season${x}rooms`],
          prices: this.offer[`season${x}prices`]
        };

        if (season.bookability) {
          seasons.push(season);
        }
      }
      return seasons;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "OfferDetailedPrices";
</style>
