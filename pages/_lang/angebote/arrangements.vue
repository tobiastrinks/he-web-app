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
  },
  head () {
    return {
      title: 'Hotel Edison - Saisonale Arrangements und Feiertagsangebote',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Angebote, Ostern, Weihnachten, Silvester, Kühlungsborn, Ostseebad' },
        {
          hid: 'description',
          name: 'description',
          content: 'Entdecken Sie unsere saisonalen Arrangements und Feiertagsangebote. Buchen Sie noch heute Ihren Traumurlaub.'
        }
      ]
    };
  }
};
</script>
