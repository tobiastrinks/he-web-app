<template>
  <div class="request-extras">
    <RequestItemTemplate :headline="$t('request.extras.headline')" :opened="opened">
      <template slot="right">
        <div class="checkbox-wrapper">
          <div class="checkbox-item">
            <input id="parking-space" type="checkbox" v-model="parkingSpace" />
            <label for="parking-space">
              <IntlText id="request.extras.parkingSpace" />
            </label>
          </div>
          <div class="checkbox-item">
            <input id="pet" type="checkbox" v-model="pet" />
            <label for="pet">
              <IntlText id="request.extras.pet" />
            </label>
          </div>
        </div>
      </template>
    </RequestItemTemplate>
  </div>
</template>

<script>
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestExtras',
  components: {IntlText, RequestItemTemplate},
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    parkingSpace: {
      get () {
        return this.requestStore.extras.parkingSpace;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setExtrasParkingSpace', value);
      }
    },
    pet: {
      get () {
        return this.requestStore.extras.pet;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setExtrasPet', value);
      }
    }
  }
};
</script>
