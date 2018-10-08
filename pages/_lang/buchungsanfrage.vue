<template>
    <RequestComponent />
</template>

<script>
import RequestComponent from '~/components/Request/Request';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'Request',
  components: { RequestComponent },
  fetch ({ store }) {
    return fetchPage('request', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Buchungsanfrage',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Buchen, Anfragen, Kontakt, Hotel Edison, Kühlungsborn, Ostseebad' },
        {
          hid: 'description',
          name: 'description',
          content: 'Senden Sie uns gern eine Buchungsanfrage mit den wichtigsten Eckdaten über Ihren gewünschten Traumurlaub im Hotel Edison in Kühlungsborn.'
        }
      ]
    };
  }
};
</script>
