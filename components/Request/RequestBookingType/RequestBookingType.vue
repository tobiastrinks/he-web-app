<template>
    <div class="request-booking-type">
      <RequestItemTemplate :headline="$t('request.bookingType.headline')" :opened="opened" >
        <template slot="right">
          <div class="radio-wrapper">
            <div
              v-for="(bookingType, index) in bookingTypesForm"
              :key="index"
              class="radio-item"
            >
              <input
                :id="bookingType.value"
                type="radio"
                name="booking-type"
                :value="bookingType.value"
                v-model="pickedBookingType"
              />
              <label :for="bookingType.value">
                <IntlText :id="bookingType.intlId" />
              </label>
            </div>
          </div>
        </template>
      </RequestItemTemplate>
    </div>
</template>

<script>
import {bookingTypes} from '@/components/Request/constants';
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestBookingType',
  components: {IntlText, RequestItemTemplate},
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      bookingTypesForm: [
        {
          value: bookingTypes.UF,
          intlId: 'request.bookingType.uf'
        },
        {
          value: bookingTypes.HP,
          intlId: 'request.bookingType.hp'
        },
        {
          value: bookingTypes.ARR,
          intlId: 'request.bookingType.arr'
        }
      ]
    };
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    pickedBookingType: {
      get () {
        return this.requestStore.bookingType;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setBookingType', value);
      }
    }
  }
};
</script>
