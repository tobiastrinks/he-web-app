<template>
  <RoomComponent />
</template>

<script>
import { fetchPage } from '~/assets/js/pageStoreHelper';
import RoomComponent from '@/components/Room/Room';

export default {
  name: 'Room',
  components: {RoomComponent},
  fetch ({ store }) {
    return fetchPage('room', store);
  }
};
</script>
