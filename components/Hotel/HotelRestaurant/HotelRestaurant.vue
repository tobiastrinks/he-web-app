<template>
    <div class="hotel-restaurant">
      <HotelRestaurantItem
        v-for="(item, index) in restaurantItems"
        :key="index"
        :content="item.fields"
        :alignLeft="index % 2 > 0"
        :data-aos="(index % 2 > 0) ? 'fade-left' : 'fade-right'"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      />
    </div>
</template>

<script>
import HotelRestaurantItem from '../HotelRestaurantItem/HotelRestaurantItem';
export default {
  name: 'HotelRestaurant',
  components: {HotelRestaurantItem},
  computed: {
    content () {
      return this.$store.state.pageHotelStore.content[0];
    },
    restaurantItems () {
      return this.content.restaurantItems;
    }
  }
};
</script>
