<template>
  <div class="contact">
    <div class="page-head">
      <HeadImg
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :image="content.headImg.fields.image"
      />
    </div>
    <div class="contact-body">
      <ContactMap />
      <ContactText />
    </div>
  </div>
</template>

<script>
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import ContactMap from '@/components/Contact/ContactMap/ContactMap';
import ContactText from '@/components/Contact/ContactText/ContactText';

export default {
  name: 'Contact',
  components: {ContactText, ContactMap, HeadImg},
  computed: {
    contactStore () { return this.$store.state.pageContactStore; },
    content () { return this.contactStore.content[0]; }
  },
  mounted () {
    this.$ga.page(this.$router);
  }
};
</script>

<style scoped lang="scss">
  @import "Contact";
</style>
