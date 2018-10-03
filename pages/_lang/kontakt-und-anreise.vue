<template>
  <ContactComponent />
</template>

<script>
import ContactComponent from '~/components/Contact/Contact';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'Contact',
  components: { ContactComponent },
  fetch ({ store }) {
    return fetchPage('contact', store);
  }
};
</script>
