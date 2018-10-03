<template>
    <div class="arrangements-item-services">
      <h2 class="arrangements-item-services-headline">{{arrangement.name}}</h2>
      <div class="arrangements-item-services-subheadline">
        <hr class="hr-inline" />
        <span>{{arrangement.subHeadline}}</span>
      </div>
      <div class="arrangements-item-services-description">
        <vue-markdown :key="arrangement.description">
          {{arrangement.description}}
        </vue-markdown>
      </div>
      <LocaleLink :to="routes.REQUEST" @click="prepareRequest">
        <ButtonSt :alignLeft="true">
          <IntlText id="arrangements.item.requestButton" />
        </ButtonSt>
      </LocaleLink>
    </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import {entryPoints, bookingTypes} from '@/components/Request/constants';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import VueMarkdown from 'vue-markdown';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'ArrangementsItemServices',
  components: {
    LocaleLink,
    ButtonSt,
    IntlText,
    VueMarkdown
  },
  props: {
    arrangement: {
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
      this.$store.commit('pageRequestStore/setEntryPoint', entryPoints.ARRANGEMENT);
      this.$store.commit('pageRequestStore/setBookingType', bookingTypes.ARR);

      if (this.arrangement.holiday) {
        this.$store.commit('pageRequestStore/setDates', {
          from: new Date(this.arrangement.bookableFrom),
          to: new Date(this.arrangement.bookableTo)
        });
        this.$store.commit('pageRequestStore/setActiveArrangement', this.arrangement);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "ArrangementsItemServices";
</style>
