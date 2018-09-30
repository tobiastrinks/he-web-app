<template>
  <div
    v-if="activeYear"
    class="arrangements-item"
    :class="{mobileOpen}"
    @click="switchOnMobile"
  >
    <div class="arrangements-item-image">
      <ThumborImage
        :store="arrangement.image"
        :dimensions="{
        sm: [500, 300]
      }"
        :cover="true"
      />
      <div class="arrangements-item-image-mobile-label">
        <p class="arrangements-item-image-mobile-label-name">{{arrangement.name}}</p>
        <div class="arrangements-item-image-mobile-label-bookable">
          <ArrangementsItemBookability :prefix="false" :arrangement="arrangement" />
        </div>
      </div>
    </div>
    <div class="arrangements-item-text">
      <ArrangementsItemServices
        :arrangement="arrangement"
      />
      <ArrangementsItemPrices
        :arrangement="arrangement"
        :activeYear="activeYear"
        :years="years"
        @setYear="setActiveYear"
      />
    </div>
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import IntlText from '@/components/_shared/IntlText/IntlText';
import ArrangementsItemServices from '@/components/Arrangements/ArrangementsItemServices/ArrangementsItemServices';
import ArrangementsItemPrices from '@/components/Arrangements/ArrangementsItemPrices/ArrangementsItemPrices';
import ArrangementsItemBookability from '@/components/Arrangements/ArrangementsItemBookability/ArrangementsItemBookability';

export default {
  name: 'ArrangementsItem',
  components: {
    ArrangementsItemBookability,
    ArrangementsItemServices,
    ArrangementsItemPrices,
    IntlText,
    ThumborImage
  },
  props: {
    arrangements: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      mobileOpen: false,
      activeYear: null
    };
  },
  computed: {
    arrangement () {
      return this.arrangements.filter(arrangement => {
        return arrangement.bookableYears.includes(this.activeYear);
      })[0];
    },
    years () {
      const years = this.arrangements
        .flatMap(arrangement => arrangement.bookableYears)
        .sort();
      return years.filter((module, index, self) => {
        return self.indexOf(module) === index;
      });
    }
  },
  methods: {
    switchOnMobile () {
      this.mobileOpen = !this.mobileOpen;
    },
    setActiveYear (newYear) {
      this.activeYear = newYear;
    }
  },
  mounted () {
    this.activeYear = this.years[0];
  }
};
</script>

<style scoped lang="scss">
  @import "ArrangementsItem";
</style>
