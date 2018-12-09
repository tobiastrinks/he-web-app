<template>
  <div class="home-offer-mini-stamp">
    <div class="home-offer-mini-stamp-inner">
      <div class="home-offer-mini-stamp-description">
        <vue-markdown :source="description" />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'HomeOfferMiniStamp',
  components: {VueMarkdown},
  props: {
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import "HomeOfferMiniStamp";
</style>
