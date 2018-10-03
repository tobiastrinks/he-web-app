<template>
    <div class="hotel-wellness">
      <div class="hotel-wellness-items">
        <HotelWellnessItem
          v-for="(item, index) in wellnessItems"
          :key="index"
          :content="item.fields"
          :reversed="index % 2 > 0"
        />
      </div>
      <!--<div class="hotel-wellness-button">-->
        <!--<ButtonSt>{{content.wellnessButtonTitle}}</ButtonSt>-->
      <!--</div>-->
    </div>
</template>

<script>
import HotelWellnessItem from '@/components/Hotel/HotelWellnessItem/HotelWellnessItem';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';

export default {
  name: 'HotelWellness',
  components: {ButtonSt, HotelWellnessItem},
  computed: {
    content () {
      return this.$store.state.pageHotelStore.content[0];
    },
    wellnessItems () {
      return this.content.wellnessItems;
    }
  }
};
</script>

<style scoped lang="scss">
  @import "HotelWellness";
</style>
