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
  },
  head () {
    return {
      title: 'Hotel Edison - Kontakt und Anreise',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Kontakt, Anreise, Anfahrt, Hotel Edison, Kühlungsborn, Ostseebad' },
        {
          hid: 'description',
          name: 'description',
          content: 'Kontaktieren Sie uns. Wir freuen uns auf Ihre Anfrage im Hotel Edison Kühlungsborn.'
        }
      ]
    };
  }
};
</script>
