<template>
  <ImprintComponent />
</template>

<script>
import ImprintComponent from '~/components/Imprint/Imprint';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'DataProtection',
  components: { ImprintComponent },
  fetch ({ store }) {
    return fetchPage('imprint', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Impressum',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Impressum, Informationen, Kontakt, Hotel Edison' },
        {
          hid: 'description',
          name: 'description',
          content: 'Hier finden Sie unser Impressum mit Informationen zur Hotel Edison GmbH und Kontaktdaten.'
        }
      ]
    };
  }
};
</script>
