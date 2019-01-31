<template>
    <div class="room-prices-table">
      <RoomPricesTableLarge
        :seasons="activeSeasons"
        :onlyOnRequest="pricesOfYear.onlyOnRequest"
        :pricesArr="pricesArr"
        :pricesNormal="pricesNormal"
        :earlyBirds="earlyBirds"
        :type="type"
      />
      <RoomPricesTableMobile
        :seasons="activeSeasons"
        :onlyOnRequest="pricesOfYear.onlyOnRequest"
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
            return {
              value: Math.ceil(this.pricesOfYear[season.priceUfKey] + this.pricesOfYear.hp),
              note: this.getNote(this.pricesOfYear, season.priceUfKey.replace('Uf', 'Hp'))
            };
          } else {
            return {
              value: Math.ceil(this.pricesOfYear[season.priceUfKey]),
              note: this.getNote(this.pricesOfYear, season.priceUfKey)
            };
          }
        });
      }
      return [];
    },
    pricesArr () {
      if (this.pricesOfYear) {
        // priceOrderedBySeasonArray
        return this.activeSeasons.map(season => {
          return {
            value: Math.ceil(this.pricesOfYear[season.priceArrKey]),
            note: this.getNote(this.pricesOfYear, season.priceArrKey)
          };
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
          .sort((a, b) => a.deadline > b.deadline ? 1 : -1);

        const earlyBirds = validAndSortedEarlyBird.map(earlyBird => {
          return {
            deadline: earlyBird.deadline,
            priceType: earlyBird.priceType,
            prices: this.seasons.map(season => {
              const priceKey = `${season.priceEBKeyPrefix}${earlyBird.roomPriceKeySuffix}`;
              return {
                value: Math.ceil(this.pricesOfYear[priceKey]),
                note: this.getNote(this.pricesOfYear, priceKey)
              };
            })
          };
        });

        // filter empty earlyBirds to avoid rendering them
        return earlyBirds.filter(earlyBird => {
          return earlyBird.prices.filter(price => price.value).length > 0;
        });
      }
      return [];
    },
    pageRoomStore () {
      return this.$store.state.pageRoomStore;
    }
  },
  methods: {
    setNotesActive (priceKey) {
      const newNotesActive = {...this.pageRoomStore.notesActive};
      const type = this.type;
      const year = this.year.toString();

      // should ignore if already active
      if (newNotesActive[type] && newNotesActive[type][year]) {
        return;
      }
      // only Uf price keys should activate notes for UF price type
      if (type === priceTypes.UF && !priceKey.includes('Uf')) {
        return;
      }

      if (!newNotesActive[type]) {
        newNotesActive[type] = {};
      }
      newNotesActive[type][year] = true;
      this.$store.commit('pageRoomStore/setNotesActive', newNotesActive);
    },
    getNote (priceObj, priceKey) {
      if (priceObj.note1keys) {
        if (priceObj.note1keys.filter(key => key === priceKey).length) {
          this.setNotesActive(priceKey);
          return '*';
        }
      }
      if (priceObj.note2keys) {
        if (priceObj.note2keys.filter(key => key === priceKey).length) {
          this.setNotesActive(priceKey);
          return '**';
        }
      }
      return '';
    }
  },
  beforeMount () {
    this.$store.commit('pageRoomStore/resetNotesActive');
  }
};
</script>
