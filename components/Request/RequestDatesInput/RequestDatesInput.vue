<template>
    <div class="request-dates-input">
      <no-ssr>
        <VueHotelDatePicker
          ref="datePicker"
          :class="{isEmpty}"
          :key="key"
          :startingDateValue="dates.from"
          :endingDateValue="dates.to"
          :i18n="localeConfig"
          format="DD.MM.YYYY"
          @checkInChanged="newCheckIn"
          @checkOutChanged="newCheckOut"
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
      return {
        night: 'Nacht',
        nights: 'Nächte',
        'day-names': ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        'check-in': 'Anreise',
        'check-out': 'Abreise',
        'month-names': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
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
