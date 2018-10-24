<template>
    <div class="rooms-widgets">
      <p class="rooms-widgets-headline">
        {{headline}}
      </p>
      <div class="rooms-widgets-content" :class="{single, double, quartet}">
        <RoomsWidgetsItem
          v-for="(room, index) in rooms"
          :key="index"
          :room="room"
          :halfWidth="halfWidth"
          :fullHeight="single"
          :hideLabel="single"
          :id="room.fields.name"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 300"
          :data-aos-anchor="index > 0 ? '#' + rooms[index-1].fields.name : ''"
          data-aos-once="true"
        />
      </div>
    </div>
</template>

<script>
import RoomsWidgetsItem from '@/components/Rooms/RoomsWidgetsItem/RoomsWidgetsItem';

export default {
  name: 'RoomsWidgets',
  components: {RoomsWidgetsItem},
  computed: {
    single () { return (this.finalItemCount === 1); },
    double () { return (this.finalItemCount === 2); },
    quartet () { return (this.finalItemCount === 4); },
    halfWidth () { return this.quartet; }
  },
  props: {
    headline: {
      type: String,
      required: true
    },
    finalItemCount: {
      type: Number,
      required: true
    },
    rooms: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomsWidgets';
</style>
