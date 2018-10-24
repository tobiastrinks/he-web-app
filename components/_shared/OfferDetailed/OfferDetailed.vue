<template>
  <div
    class="offer-detailed"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="500"
    data-aos-once="true"
  >
    <div class="offer-detailed-image">
      <ThumborImage
        :store="offer.image"
        :dimensions="{
          mo: [600, 0],
          md: [700, 0]
        }"
        :cover="true" />
    </div>
    <div class="offer-detailed-text">
      <OfferDetailedServices :offer="offer" />
      <OfferDetailedPrices :offer="offer" />
    </div>
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import OfferDetailedServices from '@/components/_shared/OfferDetailed/OfferDetailedServices/OfferDetailedServices';
import OfferDetailedPrices from '@/components/_shared/OfferDetailed/OfferDetailedPrices/OfferDetailedPrices';

export default {
  name: 'OfferDetailed',
  components: { OfferDetailedPrices, OfferDetailedServices, ThumborImage },
  props: {
    offer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import "OfferDetailed";
</style>
