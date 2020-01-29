<template>
    <RestaurantComponent />
</template>

<script>
import RestaurantComponent from '@/components/Restaurant/Restaurant';
import {fetchPage} from '@/assets/js/pageStoreHelper';

export default {
  name: 'restaurant',
  components: { RestaurantComponent },
  fetch ({ store }) {
    return fetchPage('restaurant', store);
  },
  head () {
    return {
      title: 'Hotel Edison - Hotel in Kühlungsborn',
      meta: [
        { charset: 'utf-8' },
        { name: 'keywords', content: 'Hotel, 4 Sterne, Restaurant, Wellness, Häuser, Ostseebad, Kühlungsborn' },
        {
          hid: 'description',
          name: 'description',
          content: 'Entdecken Sie unser Restaurant, Wellnessangebote und weitere Highlights unseres Hotels in Kühlungsborn an der Ostsee.'
        }
      ]
    };
  }
};
</script>
