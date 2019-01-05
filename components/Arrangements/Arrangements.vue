<template>
    <div class="arrangements">
      <HeadImg
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :image="content.headImg.fields.image"
      />
      <div class="arrangements-nav">
        <div class="arrangements-nav-item">
          <ButtonSt @click="setShowHolidays(false)" :inverted="!arrStore.showHolidays">
            <IntlText id="arrangements.nav.season" />
          </ButtonSt>
        </div>
        <div class="arrangements-nav-item">
          <ButtonSt @click="setShowHolidays(true)" :inverted="arrStore.showHolidays">
            <IntlText id="arrangements.nav.holiday" />
          </ButtonSt>
        </div>
      </div>
      <div class="arrangements-back">
        <LocaleLink :to="routes.OFFERS">
          <FontAwesomeIcon :icon="['fas', 'chevron-left']" />
          <IntlText id="arrangements.nav.backToOverview" />
        </LocaleLink>
      </div>
      <div class="arrangements-items">
        <div v-show="!arrStore.showHolidays" class="arrangements-items-seasons">
          <ArrangementsItem
            v-for="(item, index) in sortedArrangements"
            :key="index"
            :arrangements="item"
          />
          <ArrangementsFooter
            v-if="content.arrangementsFooter && content.arrangementsFooter.length"
            :markdown="content.arrangementsFooter"
          />
        </div>
        <div v-show="arrStore.showHolidays" class="arrangements-items-holidays">
          <ArrangementsItem
            v-for="(item, index) in sortedHolidays"
            :key="index"
            :arrangements="item"
          />
          <ArrangementsFooter
            v-if="content.holidaysFooter && content.holidaysFooter.length"
            :markdown="content.holidaysFooter"
          />
        </div>
      </div>
    </div>
</template>

<script>
import { routes } from '@/assets/config/routesConfig';
import { arrangementsOrder } from '@/components/Arrangements/arrangementsConfig';
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import ArrangementsItem from './ArrangementsItem/ArrangementsItem';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ArrangementsFooter from '@/components/Arrangements/ArrangementsFooter/ArrangementsFooter';

export default {
  name: 'Arrangements',
  components: {
    ArrangementsFooter,
    LocaleLink,
    IntlText,
    ButtonSt,
    HeadImg,
    ArrangementsItem
  },
  data () {
    return {
      arrangements: [],
      routes
    };
  },
  methods: {
    setShowHolidays (value) {
      this.$store.commit('pageArrangementsStore/setShowHolidays', value);
    }
  },
  computed: {
    arrStore () { return this.$store.state.pageArrangementsStore; },
    content () { return this.arrStore.content[0]; },
    sortedArrangements () {
      const arrangements = this.$store.state.arrangementsStore.content.filter(a => !a.holiday);
      const currentMonth = new Date().getMonth();
      const order = arrangementsOrder[currentMonth];

      return order.map(month => {
        const resultArrangements = arrangements.filter(arrangement => {
          const result = arrangement.bookableMonths.filter(bookableMonth => month.toString() === bookableMonth);
          return result.length > 0;
        });
        if (resultArrangements.length) {
          return resultArrangements;
        } else {
          console.error(`no arrangements for month ${month} found.`);
        }
      });
    },
    sortedHolidays () {
      const holidays = this.$store.state.arrangementsStore.content.filter(a => {
        if (a.holiday) {
          // filter expired
          return (new Date().getTime() < new Date(a.bookableTo).getTime());
        }
      });

      // group by priceKey
      const priceKeys = holidays.map(holiday => holiday.priceKey).filter((module, index, self) => {
        return self.indexOf(module) === index;
      });
      const groupedHolidays = priceKeys.map(priceKey => {
        return holidays
          .filter(h => h.priceKey === priceKey)
          .sort((h1, h2) => h1.bookableFrom > h2.bookableFrom ? 1 : -1);
      });

      // sort by date
      return groupedHolidays.sort((h1, h2) => h1[0].bookableFrom > h2[0].bookableFrom ? 1 : -1);
    }
  },
  mounted () {
    this.$ga.page(this.$router);

    const opened = this.$route.query.s;
    if (opened && opened === 'holiday') {
      this.setShowHolidays(true);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "Arrangements";
</style>
