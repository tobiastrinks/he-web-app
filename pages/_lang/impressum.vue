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
  }
};
</script>
