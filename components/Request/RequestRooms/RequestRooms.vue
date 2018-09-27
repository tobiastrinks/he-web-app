<template>
    <div class="request-rooms">
      <RequestItemTemplate :headline="$t('request.rooms.headline')" :opened="opened">
        <template slot="left">
          <div class="request-rooms-image" v-if="room !== null">
            <ThumborImage
              :store="room.images[0]"
              :dimensions="{
                sm: [500, 0]
              }"
              :cover="true"
            />
          </div>
        </template>
        <template slot="right">
          <div class="radio-wrapper">
            <div v-for="(room, index) in rooms" :key="index" class="radio-item">
              <input
                :id="room.id"
                type="radio"
                name="rooms"
                :value="room.id"
                v-model="roomVModel"
              />
              <label :for="room.id">{{room.name}}</label>
            </div>
          </div>
        </template>
      </RequestItemTemplate>
    </div>
</template>

<script>
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'RequestRooms',
  components: {ThumborImage, RequestItemTemplate},
  props: {
    rooms: {
      type: Array,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    room () {
      return this.requestStore.room;
    },
    roomVModel: {
      get () {
        const room = this.requestStore.room;
        if (room) {
          return room.id;
        } else {
          return null;
        }
      },
      set (value) {
        const selectedRoom = this.rooms.filter(room => room.id === value)[0];
        this.$store.commit('pageRequestStore/setRoom', selectedRoom);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestRooms';
</style>
