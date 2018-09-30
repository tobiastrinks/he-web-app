<template>
  <p class="arrangements-item-prices-bookable">
    <IntlText v-if="prefix" id="arrangements.item.bookable" />
    <span v-if="arrangement.bookableFrom && arrangement.bookableTo">
            {{$d(new Date(arrangement.bookableFrom + 'T00:00:00'), 'short')}}
            <IntlText id="arrangements.item.bookableDelimiter" />
            {{$d(new Date(arrangement.bookableTo + 'T00:00:00'), 'short')}}
          </span>
    <span v-else-if="arrangement.bookableString.length">
      {{arrangement.bookableString}}
    </span>
  </p>
</template>

<script>
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
  }
};
</script>

<style scoped>

</style>
