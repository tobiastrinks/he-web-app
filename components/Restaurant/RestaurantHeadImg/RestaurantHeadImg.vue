<template>
  <div class="restaurant-head-img">
    <ThumborImage
      :store="content.imgWide"
      :dimensions="{
              mo: [600, 0],
              sm: [1200, 380]
            }"
    />
  </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
export default {
  name: 'RestaurantHeadImg',
  components: {ThumborImage},
  computed: {
    content () {
      return this.$store.state.pageRestaurantStore.content[0];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RestaurantHeadImg";
</style>
