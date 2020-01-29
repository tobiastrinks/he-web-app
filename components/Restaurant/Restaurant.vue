<template>
  <div class="restaurant">
    <div class="page-head">
      <HeadImgLarge
        v-if="content !== null"
        :images="content.headImg.fields.images"
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :hasSun="content.headImg.fields.hasSun"
      />
    </div>
    <div class="page-content">
      <RestaurantHeadImg />
      <RestaurantColumns />
      <RestaurantSlider />
    </div>
  </div>
</template>

<script>
import HeadImgLarge from '@/components/_shared/HeadImgLarge/HeadImgLarge';
import RestaurantSlider from '@/components/Restaurant/RestaurantSlider/RestaurantSlider';
import RestaurantColumns from '@/components/Restaurant/RestaurantColumns/RestaurantColumns';
import RestaurantHeadImg from '@/components/Restaurant/RestaurantHeadImg/RestaurantHeadImg';

export default {
  name: 'Restaurant',
  components: {
    RestaurantHeadImg,
    RestaurantColumns,
    RestaurantSlider,
    HeadImgLarge
  },
  computed: {
    content () {
      return this.$store.state.pageRestaurantStore.content[0];
    }
  }
};
</script>

<style lang="scss">
  @import "Restaurant";
</style>
