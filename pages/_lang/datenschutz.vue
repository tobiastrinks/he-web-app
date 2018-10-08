<template>
  <DataProtectionComponent />
</template>

<script>
import DataProtectionComponent from '~/components/DataProtection/DataProtection';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'DataProtection',
  components: { DataProtectionComponent },
  fetch ({ store }) {
    return fetchPage('dataProtection', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Datenschutzerklärung',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Datenschutz, Erklärung, Hotel Edison, Kühlungsborn, Ostseebad' },
        {
          hid: 'description',
          name: 'description',
          content: 'Der Schutz Ihrer persönlichen Daten liegt uns sehr am Herzen. Hier finden Sie die Datenschutzerklärung vom Hotel Edison.'
        }
      ]
    };
  }
};
</script>
