<template>
    <div class="head-img-large">
      <div class="head-img-large-images">
        <ThumborImage v-for="(image, index) in images" :key="index"
          :store="image"
          :dimensions="{
            sm: [600, 800],
            md: [900, 0],
            lg: [2000, 0]
          }"
          :cover="true"
        />
      </div>
      <h1 class="head-img-large-headline">
        {{headline}}
      </h1>
      <p class="head-img-large-subheadline">
        {{subHeadline}}
      </p>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';

export default {
  name: 'HeadImgLarge',
  props: {
    images: {
      type: Array,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    subHeadline: {
      type: String,
      required: true
    }
  },
  components: {
    ThumborImage
  }
};
</script>

<style scoped lang="scss">
  @import 'HeadImgLarge';
</style>
