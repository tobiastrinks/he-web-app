<template>
    <div class="room-prices-table">
      <RoomPricesTableLarge
        :seasons="activeSeasons"
        :pricesArr="pricesArr"
        :pricesNormal="pricesNormal"
        :earlyBirds="earlyBirds"
        :type="type"
      />
      <RoomPricesTableMobile
        :seasons="activeSeasons"
        :pricesArr="pricesArr"
        :pricesNormal="pricesNormal"
        :earlyBirds="earlyBirds"
        :type="type"
      />
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import {seasons} from '@/assets/config/hotelConfig';
import {priceTypes} from '@/components/Room/RoomPrices/constants';
import RoomPricesTableLarge from '@/components/Room/RoomPricesTableLarge/RoomPricesTableLarge';
import RoomPricesTableMobile from '@/components/Room/RoomPricesTableMobile/RoomPricesTableMobile';

export default {
  name: 'RoomPricesTable',
  components: {RoomPricesTableMobile, RoomPricesTableLarge, IntlText},
  props: {
    room: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  data () {
    return { priceTypes, seasons };
  },
  computed: {
    activeSeasons () {
      const selectedYear = this.year;
      const d = new Date();
      const currentYear = d.getFullYear();
      const currentMonth = d.getMonth() + 1;

      if (selectedYear > currentYear) {
        return seasons;
      } else {
        return seasons.filter(season => {
          // compare months
          const upcomingSeasonMonths = season.months.filter(
            month => (month >= currentMonth)
          );
          return upcomingSeasonMonths.length > 0;
        });
      }
    },
    pricesOfYear () {
      const prices = this.room.prices.filter(price => { return (price.fields.year === this.year); });
      if (prices.length) {
        return prices[0].fields;
      }
    },
    pricesNormal () {
      if (this.pricesOfYear) {
        // priceOrderedBySeasonArray
        return this.activeSeasons.map(season => {
          if (this.type === priceTypes.HP) {
            return this.pricesOfYear[season.priceUfKey] + this.pricesOfYear.hp;
          } else {
            return this.pricesOfYear[season.priceUfKey];
          }
        });
      }
      return [];
    },
    pricesArr () {
      if (this.pricesOfYear) {
        // priceOrderedBySeasonArray
        return this.activeSeasons.map(season => {
          return this.pricesOfYear[season.priceArrKey];
        });
      }
      return [];
    },
    earlyBirdConfig () {
      return this.$store.state.roomPriceEarlyBirdStore.content;
    },
    earlyBirds () {
      if (this.pricesOfYear) {
        const validAndSortedEarlyBird = this.earlyBirdConfig
          .filter(item => new Date(item.deadline).getTime() > new Date().getTime())
          .sort((a, b) => a.deadline > b.deadline);

        const earlyBirds = validAndSortedEarlyBird.map(earlyBird => {
          return {
            deadline: earlyBird.deadline,
            priceType: earlyBird.priceType,
            prices: this.seasons.map(season => {
              return this.pricesOfYear[`${season.priceEBKeyPrefix}${earlyBird.roomPriceKeySuffix}`];
            })
          };
        });

        // filter empty earlyBirds to avoid rendering them
        return earlyBirds.filter(earlyBird => {
          return earlyBird.prices.filter(price => price).length > 0;
        });
      }
      return [];
    }
  }
};
</script>
