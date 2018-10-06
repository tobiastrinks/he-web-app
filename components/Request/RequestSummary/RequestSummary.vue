<template>
    <div class="request-summary">
      <RequestItemTemplate :headline="$t('request.summary.headline')" :opened="opened">
        <template slot="left">
          <div class="request-summary-image" v-if="room !== null">
            <ThumborImage
              :store="room.images[0]"
              :dimensions="{
                mo: [0, 300],
                sm: [0, 1000]
              }"
              :cover="true"
            />
          </div>
        </template>
        <template slot="right">
          <RequestSummaryData />
          <RequestSummaryForm />
        </template>
      </RequestItemTemplate>
    </div>
</template>

<script>
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import RequestSummaryData from '../RequestSummaryData/RequestSummaryData';
import RequestSummaryForm from '../RequestSummaryForm/RequestSummaryForm';

export default {
  name: 'RequestSummary',
  components: {
    ThumborImage,
    RequestItemTemplate,
    RequestSummaryData,
    RequestSummaryForm
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    room () {
      return this.requestStore.room;
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestSummary';
</style>
