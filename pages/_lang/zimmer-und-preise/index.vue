<template>
   <RoomsComponent />
</template>

<script>
import { fetchPage } from '~/assets/js/pageStoreHelper';
import RoomsComponent from '@/components/Rooms/Rooms';

export default {
  name: 'Rooms',
  components: {RoomsComponent},
  fetch ({ store }) {
    return fetchPage('rooms', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Zimmerübersicht',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Zimmer, doppel, Appartements, Suite, Preise, Hotel Edison' },
        {
          hid: 'description',
          name: 'description',
          content: 'Wir bieten eine Vielzahl von Doppelzimmern und Appartements an. Für einen besonders exklusiven Urlaub wohnen Sie in unserer Panorama Suite mit Dachterasse.'
        }
      ]
    };
  }
};
</script>
