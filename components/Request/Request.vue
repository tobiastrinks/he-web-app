<template>
    <div class="request">
      <div class="request-form" v-show="!requestStore.submitted">
        <div class="page-head">
          <HeadImg
            :headline="content.headImg.fields.headline"
            :sub-headline="content.headImg.fields.subHeadline"
            :image="content.headImg.fields.image"
          />
        </div>
        <RequestRooms
          v-if="entryPoint === entryPoints.ROOM"
          :rooms="rooms"
          :opened="roomsOpened"
        />
        <RequestBookingType
          :opened="bookingTypeOpened"
        />
        <RequestDates :opened="datesOpened" />
        <RequestRooms
          v-if="entryPoint === entryPoints.DEFAULT || entryPoint === entryPoints.ARRANGEMENT"
          :rooms="rooms"
          :opened="roomsOpened"
        />
        <RequestPersons :opened="personsOpened" />
        <RequestExtras :opened="extrasOpened" />
        <RequestComments :opened="commentsOpened" />
        <RequestSummary :opened="summaryOpened" />
        <RequestSubmit v-show="summaryOpened" />
      </div>
      <div class="request-confirmation" v-show="requestStore.submitted">
        <HeadImg
          :headline="content.confirmationHeadImg.fields.headline"
          :sub-headline="content.confirmationHeadImg.fields.subHeadline"
          :image="content.confirmationHeadImg.fields.image"
        />
        <RequestConfirmation />
      </div>
    </div>
</template>

<script>
import { entryPoints } from '@/components/Request/constants';
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import RequestRooms from '@/components/Request/RequestRooms/RequestRooms';
import RequestBookingType from '@/components/Request/RequestBookingType/RequestBookingType';
import RequestExtras from '@/components/Request/RequestExtras/RequestExtras';
import RequestComments from '@/components/Request/RequestComments/RequestComments';
import RequestDates from '@/components/Request/RequestDates/RequestDates';
import RequestPersons from '@/components/Request/RequestPersons/RequestPersons';
import RequestSummary from '@/components/Request/RequestSummary/RequestSummary';
import RequestSubmit from '@/components/Request/RequestSubmit/RequestSubmit';
import RequestConfirmation from '@/components/Request/RequestConfirmation/RequestConfirmation';

export default {
  name: 'Request',
  components: {
    RequestConfirmation,
    RequestSummary,
    RequestPersons,
    RequestDates,
    RequestComments,
    RequestExtras,
    RequestBookingType,
    RequestRooms,
    RequestSubmit,
    HeadImg
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    content () { return this.requestStore.content[0]; },
    rooms () { return this.$store.state.roomsStore.content; },
    entryPoint () { return this.requestStore.entryPoint; },
    bookingTypeOpened () {
      return (
        (this.requestStore.entryPoint === entryPoints.DEFAULT) ||
        (this.requestStore.entryPoint === entryPoints.ARRANGEMENT) ||
        (this.requestStore.entryPoint === entryPoints.ROOM && (
          this.requestStore.room !== null
        ))
      );
    },
    datesOpened () {
      return this.requestStore.bookingType !== null;
    },
    roomsOpened () {
      return (
        (this.requestStore.entryPoint === entryPoints.ROOM) ||
        (this.requestStore.dates.from !== null && this.requestStore.dates.to !== null)
      );
    },
    personsOpened () {
      return (this.requestStore.room !== null && this.roomsOpened);
    },
    extrasOpened () {
      if (this.personsOpened && this.requestStore.persons) {
        return this.requestStore.persons.filter(person => person.count > 0).length > 0;
      }
      return false;
    },
    commentsOpened () {
      return this.extrasOpened;
    },
    summaryOpened () {
      return this.commentsOpened;
    }
  },
  data () {
    return {
      entryPoints
    };
  },
  created () {
    if (!this.requestStore.entryPoint) {
      this.$store.commit('pageRequestStore/setEntryPoint', entryPoints.DEFAULT);
    }
  },
  mounted () {
    this.$ga.page(this.$router);
  }
};
</script>

<style lang="scss">
  @import 'Request';
</style>
