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
  }
};
</script>
