<template>
  <p class="arrangements-item-prices-bookable">
    <IntlText v-if="prefix" id="arrangements.item.bookable" />
    <span v-if="arrangement.bookableFrom && arrangement.bookableTo">
      {{getLocaleDateString(new Date(arrangement.bookableFrom + 'T00:00:00'))}}
      <IntlText id="arrangements.item.bookableDelimiter" />
      {{getLocaleDateString(new Date(arrangement.bookableTo + 'T00:00:00'))}}
    </span>
    <span v-else-if="arrangement.bookableString.length">
      {{arrangement.bookableString}}
    </span>
  </p>
</template>

<script>
import {getLocaleDateString} from '@/assets/js/dateUtils';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'ArrangementsItemBookability',
  components: {IntlText},
  props: {
    arrangement: {
      type: Object,
      required: true
    },
    prefix: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      getLocaleDateString
    };
  }
};
</script>
