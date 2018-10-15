<template>
  <div class="offers-item">
    <Offer
      v-if="offerContentType === 'offer'"
      :image="offerFields.image"
      :imageAlignLeft="offerFields.imageAlignLeft"
      :headline="offerFields.headline"
      :subHeadline="offerFields.subHeadline"
      :description="offerFields.description"
      :button="offerFields.button"
      :buttonLink="offerFields.buttonLink"
    />
    <OfferDetailed
      v-if="offerContentType === 'offerDetailed'"
      :offer="offerFields"
    />
  </div>
</template>

<script>
import Offer from '@/components/_shared/Offer/Offer';
import OfferDetailed from '@/components/_shared/OfferDetailed/OfferDetailed';

export default {
  name: 'OffersItem',
  components: {OfferDetailed, Offer},
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  computed: {
    offerFields () {
      return this.offer.fields;
    },
    offerContentType () {
      return this.offer.sys.contentType.sys.id;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "OffersItem";
</style>
