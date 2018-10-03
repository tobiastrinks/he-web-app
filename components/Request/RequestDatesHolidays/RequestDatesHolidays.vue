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
              {{$d(new Date(holiday.bookableFrom + 'T00:00:00'), 'short')}} - {{$d(new Date(holiday.bookableTo + 'T00:00:00'), 'short')}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
export default {
  name: 'RequestDatesHolidays',
  components: {IntlText},
  computed: {
    holidays () {
      const allHolidays = this.$store.state.arrangementsStore.content
        .filter(arrangement =>
          arrangement.holiday
        );
      // get the upcoming next 3
      return allHolidays.sort((a, b) => {
        return a.bookableFrom > b.bookableTo;
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
