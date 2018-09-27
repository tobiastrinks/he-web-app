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
  }
};
</script>

<style scoped>

</style>
