<template>
    <div class="request-dates-holidays">
      <table class="request-dates-holidays-table">
        <tbody>
          <tr
            v-for="(holiday, index) in holidays"
            :key="index"
            @click="selectHoliday(holiday)"
            class="request-dates-holidays-table-tr"
            :class="{
              selected: (
                activeDates.to && activeDates.from &&
                new Date(holiday.bookableFrom + 'T00:00:00').getTime() === activeDates.from.getTime() &&
                new Date(holiday.bookableTo + 'T00:00:00').getTime() === activeDates.to.getTime()
              )
            }"
          >
            <td class="request-dates-holidays-table-td">
              {{holiday.officialName}}:
            </td>
            <td class="request-dates-holidays-table-td">
              {{getBookableString(holiday.bookableFrom, holiday.bookableTo)}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import {getContentfulDateString, getLocaleDateString} from '@/assets/js/dateUtils';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestDatesHolidays',
  components: {IntlText},
  computed: {
    holidays () {
      const allHolidays = this.$store.state.arrangementsStore.content
        .filter(arrangement => {
          const d = new Date();
          return arrangement.holiday && arrangement.bookableFrom >= getContentfulDateString(d);
        });
      // get the upcoming next 3
      return allHolidays.sort((a, b) => {
        return a.bookableFrom > b.bookableTo ? 1 : -1;
      }).slice(0, 3);
    },
    requestStore () {
      return this.$store.state.pageRequestStore;
    },
    activeDates () {
      return {
        from: this.requestStore.dates.from,
        to: this.requestStore.dates.to
      };
    }
  },
  methods: {
    getBookableString (bookableFrom, bookableTo) {
      const f = new Date(bookableFrom + 'T00:00:00');
      const t = new Date(bookableTo + 'T00:00:00');
      return `${getLocaleDateString(f)} - ${getLocaleDateString(t)}`;
    },
    selectHoliday (holiday) {
      this.$emit('setDates', {
        from: new Date(holiday.bookableFrom + 'T00:00:00'),
        to: new Date(holiday.bookableTo + 'T00:00:00')
      });
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestDatesHolidays';
</style>
