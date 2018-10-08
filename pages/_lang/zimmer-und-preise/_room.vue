<template>
  <RoomComponent />
</template>

<script>
import { fetchPage } from '~/assets/js/pageStoreHelper';
import RoomComponent from '@/components/Room/Room';

export default {
  name: 'Room',
  components: {RoomComponent},
  fetch ({ store }) {
    return fetchPage('room', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Zimmer entdecken',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Zimmer, Preise, Bad, wohnen, Grundriss, Hotel Edison' },
        {
          hid: 'description',
          name: 'description',
          content: 'Sie finden hier Bilder, den Grundriss, sowie weitere Informationen und Preise zu Ihrem Zimmer im Hotel Edison Kühlungsborn.'
        }
      ]
    };
  }
};
</script>
