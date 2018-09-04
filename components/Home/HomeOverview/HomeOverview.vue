<template>
  <div class="home-overview">
    <HomeOverviewItem
      v-for="(item, index) in items"
      :key="index"
      :img-store="item.fields.image"
      :is-image-align-left="item.fields.isImageAlignLeft"
      :headline="item.fields.headline"
      :sub-headline="item.fields.subHeadline"
      :text="item.fields.text"
      :button-text="item.fields.buttonText"
      :button-link="item.fields.buttonLink"
    />
  </div>
</template>

<script>
import HomeOverviewItem from '@/components/Home/HomeOverviewItem/HomeOverviewItem';
export default {
  name: 'HomeOverview',
  components: {HomeOverviewItem},
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'HomeOverview';
</style>
