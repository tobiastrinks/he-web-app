<template>
    <div class="hotel-wellness-item" :class="{reversed}">
      <div class="hotel-wellness-item-image">
        <ThumborImage
          :store="content.image"
          :dimensions="{
            sm: [300, 300]
          }"
          :cover="true"
        />
      </div>
      <div class="hotel-wellness-item-text">
        <p class="hotel-wellness-item-text-headline">
          {{content.headline}}
        </p>
        <hr class="hr-short" />
        <div class="hotel-wellness-item-text-description">
          {{content.description}}
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HotelWellnessItem',
  components: {ThumborImage},
  props: {
    content: {
      type: Object,
      required: true
    },
    reversed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
  @import "HotelWellnessItem";
</style>
