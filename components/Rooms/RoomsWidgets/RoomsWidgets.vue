<template>
    <div class="rooms-widgets">
      <p class="rooms-widgets-headline">
        {{headline}}
      </p>
      <div class="rooms-widgets-content" :class="{single, double, quartet}">
        <RoomsWidgetsItem
          v-for="(room, key) in rooms"
          :key="key"
          :room="room"
          :halfWidth="halfWidth"
          :fullHeight="single"
          :hideLabel="single"
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
