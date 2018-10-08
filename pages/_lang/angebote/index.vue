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
  },
  head () {
    return {
      title: 'Hotel Edison - Aktuelle Angebote und Arrangements',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Angebote, Saison, Rabatte, Aktionen, Hotel Edison, Kühlungsborn, Ostseebad' },
        {
          hid: 'description',
          name: 'description',
          content: 'Entdecken Sie hier unsere Sonderangebote, sowie saisonale Arrangements und Feiertagsangebote des Hotel Edison.'
        }
      ]
    };
  }
};
</script>
