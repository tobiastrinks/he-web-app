<template>
  <div>
    <HeadImgLarge
      v-if="content !== null"
      :images="content.headImg.fields.images"
      :headline="content.headImg.fields.headline"
      :sub-headline="content.headImg.fields.subHeadline"
    />
  </div>
</template>

<script>
import HeadImgLarge from '@/components/_shared/HeadImgLarge/HeadImgLarge';

export default {
  components: {
    HeadImgLarge
  },
  computed: {
    content () { return this.$store.state.pageHomeStore.content; }
  }
};
</script>
