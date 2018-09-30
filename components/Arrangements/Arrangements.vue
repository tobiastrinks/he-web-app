<template>
    <div class="arrangements">
      <HeadImg
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :image="content.headImg.fields.image"
      />
      <div class="arrangements-nav">

      </div>
      <div class="arrangements-items">
        <div class="arrangements-items-seasons">
          <ArrangementsItem
            v-for="(item, index) in sortedArrangements"
            :key="index"
            :arrangements="item"
          />
        </div>
        <div class="arrangements-items-holidays">
          <!-- TODO -->
        </div>
      </div>
    </div>
</template>

<script>
import { arrangementsOrder } from '@/components/Arrangements/arrangementsConfig';
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import ArrangementsItem from './ArrangementsItem/ArrangementsItem';

export default {
  name: 'Arrangements',
  components: {
    HeadImg,
    ArrangementsItem
  },
  data () {
    return {
      arrangements: []
    };
  },
  computed: {
    content () { return this.$store.state.pageArrangementsStore.content[0]; },
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
      const holiday = this.$store.state.arrangementsStore.content.filter(a => a.holiday);
      return holiday;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "Arrangements";
</style>
