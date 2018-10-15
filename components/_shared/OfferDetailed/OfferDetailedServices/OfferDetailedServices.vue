<template>
  <div class="offer-detailed-services">
    <h2 class="offer-detailed-services-headline">{{offer.name}}</h2>
    <div class="offer-detailed-services-subheadline">
      <hr class="hr-inline" />
      <span>{{offer.subHeadline}}</span>
    </div>
    <div class="offer-detailed-services-description">
      <vue-markdown>
        {{offer.description}}
      </vue-markdown>
    </div>
    <LocaleLink :to="routes.REQUEST" @click="prepareRequest">
      <ButtonSt :alignLeft="true">
        <IntlText id="offers.offerDetailed.requestButton" />
      </ButtonSt>
    </LocaleLink>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import {bookingTypes} from '@/components/Request/constants';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'OfferDetailedServices',
  components: {
    IntlText,
    VueMarkdown,
    ButtonSt,
    LocaleLink
  },
  props: {
    offer: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      routes
    };
  },
  methods: {
    prepareRequest () {
      this.$store.commit('pageRequestStore/setBookingType', bookingTypes.UF);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "OfferDetailedServices";
</style>
