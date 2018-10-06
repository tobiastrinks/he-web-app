<template>
  <OffersComponent />
</template>

<script>
import OffersComponent from '@/components/Offers/Offers';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'index',
  components: { OffersComponent },
  fetch ({ store }) {
    return fetchPage('offers', store);
  }
};
</script>
