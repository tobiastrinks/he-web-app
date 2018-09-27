<template>
    <div class="request-date-arrangement">
      <div class="request-date-arrangement-tile" v-if="activeArrangement">
        <ThumborImage
          class="request-date-arrangement-tile-image"
          :store="activeArrangement.image"
          :dimensions="{
            sm: [400, 0]
          }"
          :cover="true"
        />
        <div class="request-date-arrangement-tile-text">
          <p class="request-date-arrangement-tile-text-name">
            {{activeArrangement.name}}
          </p>
          <div class="request-date-arrangement-tile-text-subheadline">
            <hr class="hr-inline" />
            <span>{{activeArrangement.subHeadline}}</span>
          </div>
          <div class="request-date-arrangement-tile-text-description">
            <vue-markdown :key="activeArrangement.description">{{activeArrangement.description}}</vue-markdown>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'RequestDatesArrangement',
  components: {ThumborImage, VueMarkdown},
  computed: {
    state () {
      return this.$store.state.pageRequestStore;
    },
    bookingType () {
      return this.state.bookingType;
    },
    dates () {
      return this.state.dates;
    },
    activeArrangement () {
      if (this.state.bookingType === 'arr') {
        return this.state.activeArrangement;
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestDatesArrangement";
</style>
