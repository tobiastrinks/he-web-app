<template>
  <ArrangementsComponent />
</template>

<script>
import ArrangementsComponent from '~/components/Arrangements/Arrangements';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'Arrangements',
  components: { ArrangementsComponent },
  fetch ({ store }) {
    return fetchPage('arrangements', store);
  }
};
</script>
