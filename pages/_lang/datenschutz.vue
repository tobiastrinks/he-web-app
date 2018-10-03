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
  }
};
</script>
