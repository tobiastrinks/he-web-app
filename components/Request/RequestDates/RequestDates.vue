<template>
  <div class="request-dates">
    <RequestItemTemplate :headline="$t('request.dates.headline')" :opened="opened">
      <template slot="left">
        <RequestDatesArrangement />
      </template>
      <template slot="right">
        <RequestDatesInput @setDates="submitSelectedDates" />
        <RequestDatesHolidays
          @setDates="submitSelectedDates"
          v-show="$store.state.pageRequestStore.bookingType === 'arr'"
        />
        <RequestDatesOffers />
      </template>
    </RequestItemTemplate>
  </div>
</template>

<script>
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import RequestDatesInput from '../RequestDatesInput/RequestDatesInput';
import RequestDatesHolidays from '../RequestDatesHolidays/RequestDatesHolidays';
import RequestDatesArrangement from '@/components/Request/RequestDatesArrangement/RequestDatesArrangement';
import RequestDatesOffers from '@/components/Request/RequestDatesOffers/RequestDatesOffers';

export default {
  name: 'RequestDates',
  components: {
    RequestDatesOffers,
    RequestDatesArrangement,
    RequestItemTemplate,
    RequestDatesInput,
    RequestDatesHolidays
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    dates () {
      return this.requestStore.dates;
    },
    arrangements () {
      return this.$store.state.arrangementsStore.content;
    }
  },
  methods: {
    submitSelectedDates (dates) {
      const fromDate = dates.from;
      const toDate = dates.to;

      this.$store.commit('pageRequestStore/setDates', {
        from: fromDate,
        to: toDate
      });
      if (fromDate && toDate) {
        this.setActiveArrangement(dates);
      } else {
        this.$store.commit('pageRequestStore/setActiveArrangement', null);
      }
    },
    setActiveArrangement (dates) {
      if (this.requestStore.bookingType === 'arr') {
        const activeArrangements = this.arrangements.filter(arrangement => {
          const {
            bookableFrom,
            bookableTo,
            bookableMonths
          } = arrangement;

          if (bookableFrom && bookableTo) {
            const from = new Date(bookableFrom + 'T00:00:00');
            const to = new Date(bookableTo + 'T00:00:00');

            return (
              from.getTime() <= dates.from.getTime() &&
              dates.to.getTime() <= to.getTime()
            );
          } else if (bookableMonths.length) {
            const activeMonth = bookableMonths.filter(monthString => {
              const month = parseInt(monthString) - 1;
              // check only if start date is in month
              return (
                month === dates.from.getMonth() &&
                parseInt(arrangement.bookableYears) === dates.from.getFullYear()
              );
            });
            return activeMonth.length > 0;
          }
        });
        // prefer holidays
        const activeArrangementsSorted = activeArrangements.sort(a1 => !a1.holiday);
        this.$store.commit('pageRequestStore/setActiveArrangement', activeArrangementsSorted[0]);
      }
    }
  }
};
</script>

<style scoped>

</style>
