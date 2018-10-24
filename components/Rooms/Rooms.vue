<template>
    <div class="rooms">
      <div class="page-head">
        <HeadImg
          v-if="content !== null"
          :image="content.headImg.fields.image"
          :headline="content.headImg.fields.headline"
          :sub-headline="content.headImg.fields.subHeadline"
        />
      </div>
      <div class="page-content">
        <div class="rooms-overview">
          <div class="rooms-overview-line">
            <div class="rooms-overview-doublerooms">
              <RoomsWidgets
                :headline="content.doubleroomHeadline"
                :rooms="content.doubleroomItems"
                :final-item-count="4"
              />
            </div>
          </div>
          <div class="rooms-overview-line">
            <div class="rooms-overview-apartments">
              <RoomsWidgets :headline="content.apartmentHeadline" :rooms="content.apartmentItems" :final-item-count="2" />
            </div>
            <div class="rooms-overview-suite">
              <RoomsWidgets :headline="content.suiteHeadline" :rooms="content.suiteItems" :final-item-count="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import RoomsWidgets from './RoomsWidgets/RoomsWidgets';

export default {
  name: 'Rooms',
  components: {HeadImg, RoomsWidgets},
  computed: {
    content () { return this.$store.state.pageRoomsStore.content[0]; }
  }
};
</script>

<style scoped lang="scss">
  @import 'Rooms';
</style>
