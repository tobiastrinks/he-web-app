<template>
    <div class="request-summary-data" v-if="isFormValid">
      <table class="request-summary-data-table">
        <tbody>
          <tr
            v-for="(item, index) in summaryData"
            v-if="item.values.length"
            :key="index"
            class="request-summary-data-tr"
          >
            <td class="request-summary-data-td">
              <IntlText :id="item.headlineId" />
            </td>
            <td class="request-summary-data-td">
              <p v-for="(value, index) in item.values" :key="index">{{value}}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { getPersonLabel } from '@/components/Request/utils';
import { getLocaleDateString } from '@/assets/js/dateUtils';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestSummaryData',
  components: {IntlText},
  computed: {
    requestState () {
      return this.$store.state.pageRequestStore;
    },
    isFormValid () {
      return (
        this.requestState.bookingType &&
        this.requestState.dates.from &&
        this.requestState.dates.to &&
        this.requestState.room &&
        this.requestState.persons
      );
    },
    summaryData () {
      return [
        {
          headlineId: 'request.bookingType.headline',
          values: this.bookingType
        },
        {
          headlineId: 'request.dates.headline',
          values: this.dates
        },
        {
          headlineId: 'request.rooms.headline',
          values: this.room
        },
        {
          headlineId: 'request.persons.headline',
          values: this.persons
        },
        {
          headlineId: 'request.extras.headline',
          values: this.extras
        },
        {
          headlineId: 'request.comments.headline',
          values: this.comments
        }
      ];
    },
    bookingType () {
      const bookingType = [this.$t(`request.bookingType.${this.requestState.bookingType}`)];
      if (this.requestState.activeArrangement) {
        bookingType.push(
          this.$t('request.summary.data.bookingTypeArrangementPrefix') +
          this.requestState.activeArrangement.officialName
        );
      }
      return bookingType;
    },
    dates () {
      const from = getLocaleDateString(new Date(this.requestState.dates.from));
      const to = getLocaleDateString(new Date(this.requestState.dates.to));

      return [this.$t('request.summary.data.dates', { from, to })];
    },
    room () {
      return [this.requestState.room.name];
    },
    persons () {
      return this.requestState.persons
        .filter(person => person.count > 0)
        .map(person => {
          return `${person.count} ${getPersonLabel(this, person)}`;
        });
    },
    extras () {
      const extras = this.requestState.extras;
      const result = [];
      if (extras.parkingSpace) {
        result.push(this.$t('request.extras.parkingSpace'));
      }
      if (extras.pet) {
        result.push(this.$t('request.extras.pet'));
      }
      return result;
    },
    comments () {
      if (this.requestState.comments) {
        return [this.requestState.comments];
      } else {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestSummaryData';
</style>
