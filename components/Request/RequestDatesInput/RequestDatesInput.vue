<template>
    <div class="request-dates-input">
      <no-ssr>
        <VueHotelDatePicker
          ref="datePicker"
          :class="{isEmpty}"
          :key="key"
          :starting-date-value="dates.from"
          :ending-date-value="dates.to"
          :i18n="localeConfig"
          :first-day-of-week="1"
          format="DD.MM.YYYY"
          @check-in-changed="newCheckIn"
          @check-out-changed="newCheckOut"
        />
      </no-ssr>
    </div>
</template>

<script>
import VueHotelDatePicker from 'vue-hotel-datepicker';

export default {
  name: 'RequestDatesInput',
  components: {VueHotelDatePicker},
  data () {
    return {
      datesOnSelect: {
        from: null,
        to: null
      }
    };
  },
  computed: {
    requestState () {
      return this.$store.state.pageRequestStore;
    },
    dates () {
      return this.$store.state.pageRequestStore.dates;
    },
    key () {
      return `
        ${this.dates.from}
        ${this.dates.to}
      `;
    },
    isEmpty () {
      return this.datesOnSelect.from === null && this.dates.from === null;
    },
    localeConfig () {
      const pre = 'request.dates.calendar';
      return {
        night: this.$t(`${pre}.night`),
        nights: this.$t(`${pre}.nights`),
        'day-names': [
          this.$t(`${pre}.dayNames.mon`),
          this.$t(`${pre}.dayNames.tue`),
          this.$t(`${pre}.dayNames.wed`),
          this.$t(`${pre}.dayNames.thu`),
          this.$t(`${pre}.dayNames.fri`),
          this.$t(`${pre}.dayNames.sat`),
          this.$t(`${pre}.dayNames.sun`)
        ],
        'check-in': this.$t(`${pre}.checkIn`),
        'check-out': this.$t(`${pre}.checkOut`),
        'month-names': [
          this.$t(`${pre}.monthNames.jan`),
          this.$t(`${pre}.monthNames.feb`),
          this.$t(`${pre}.monthNames.mar`),
          this.$t(`${pre}.monthNames.apr`),
          this.$t(`${pre}.monthNames.may`),
          this.$t(`${pre}.monthNames.jun`),
          this.$t(`${pre}.monthNames.jul`),
          this.$t(`${pre}.monthNames.aug`),
          this.$t(`${pre}.monthNames.sep`),
          this.$t(`${pre}.monthNames.okt`),
          this.$t(`${pre}.monthNames.nov`),
          this.$t(`${pre}.monthNames.dec`)
        ]
      };
    }
  },
  methods: {
    hideDatepicker () {
      document.getElementsByTagName('BODY')[0].classList.remove('-overflow-hidden');
      this.$refs.datePicker.hideDatepicker();
    },
    newCheckIn (date) {
      this.datesOnSelect.from = date;
      if (!date) {
        this.hideDatepicker();
        this.$emit('setDates', {
          from: null,
          to: null
        });
      }
    },
    newCheckOut (date) {
      if (date) {
        this.datesOnSelect.to = date;
        this.$emit('setDates', this.datesOnSelect);
      }
      this.hideDatepicker();
    }
  }
};
</script>

<style lang="scss">
  @import 'RequestDatesInput';
</style>
