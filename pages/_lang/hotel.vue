<template>
    <HotelComponent />
</template>

<script>
import HotelComponent from '@/components/Hotel/Hotel';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'hotel',
  components: { HotelComponent },
  fetch ({ store }) {
    return fetchPage('hotel', store);
  }
};
</script>
