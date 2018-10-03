<template>
  <div class="data-protection">
    <HeadImg
      :headline="content.headImg.fields.headline"
      :sub-headline="content.headImg.fields.subHeadline"
      :image="content.headImg.fields.image"
    />
    <div class="data-protection-body">
      <TextSection
        v-for="(textSection, index) in textSections"
        :key="index"
        :hideDelimiter="index + 1 === textSections.length"
      >
        <template slot="headline">
          {{textSection.fields.headline}}
        </template>
        <template slot="article">
          <vue-markdown>
            {{textSection.fields.article}}
          </vue-markdown>
        </template>
      </TextSection>
    </div>
  </div>
</template>

<script>
import HeadImg from '@/components/_shared/HeadImg/HeadImg';
import TextSection from '@/components/_shared/TextSection/TextSection';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'DataProtection',
  components: {TextSection, HeadImg, VueMarkdown},
  computed: {
    dataProtectionStore () { return this.$store.state.pageDataProtectionStore; },
    content () { return this.dataProtectionStore.content[0]; },
    textSections () { return this.content.textSections; }
  }
};
</script>

<style scoped lang="scss">
  @import "DataProtection";
</style>
