<template>
  <HomeComponent/>
</template>

<script>
import { fetchPage } from '~/assets/js/pageStoreHelper';
import HomeComponent from '~/components/Home/Home';

export default {
  name: 'Home',
  components: {
    HomeComponent
  },
  fetch ({ store }) {
    return fetchPage('home', store);
  },
  head () {
    return {
      title: 'Hotel Edison - 4 Sterne Hotel in Kühlungsborn',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: '4 Sterne Hotel, Kühlungsborn, Waldrand, Ostseebad, Urlaub, Strand' },
        {
          hid: 'description',
          name: 'description',
          content: 'Unser 4 Sterne Hotel bietet Ihnen eine entspannte Atmosphäre mitten im Ostseebad Kühlungsborn zwischen Küstenwald und Lindenpark.'
        }
      ]
    };
  }
};
</script>
