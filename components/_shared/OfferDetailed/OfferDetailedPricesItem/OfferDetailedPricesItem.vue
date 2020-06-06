<template>
  <div class="offer-detailed-prices-item">
    <p class="offer-detailed-prices-item-bookable">
      {{bookability}}
    </p>
    <table class="offer-detailed-prices-item-values">
      <tbody>
        <tr
          v-for="(room, index) in rooms"
          :key="index"
        >
          <td class="offer-detailed-prices-item-values-room">
            {{room}}
          </td>
          <td class="offer-detailed-prices-item-values-price">
            <Price>
              <span>{{$t('global.fromLabel')}}</span>
              {{prices[index]}}
            </Price>
          </td>
        </tr>
      </tbody>
    </table>
    <hr class="hr-mini" />
  </div>
</template>

<script>
import Price from '@/components/_shared/Price/Price';

export default {
  name: 'OfferDetailedPricesItem',
  components: {Price},
  props: {
    bookability: {
      type: String,
      required: true
    },
    rooms: {
      type: Array,
      required: true
    },
    prices: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import "OfferDetailedPricesItem";
</style>
