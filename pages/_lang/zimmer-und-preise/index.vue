<template>
   <RoomsComponent />
</template>

<script>
import { fetchPage } from '~/assets/js/pageStoreHelper';
import RoomsComponent from '@/components/Rooms/Rooms';

export default {
  name: 'Rooms',
  components: {RoomsComponent},
  fetch ({ store }) {
    return fetchPage('rooms', store);
  }
};
</script>
