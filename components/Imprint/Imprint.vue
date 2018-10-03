<template>
  <div class="imprint">
    <HeadImg
      :headline="content.headImg.fields.headline"
      :sub-headline="content.headImg.fields.subHeadline"
      :image="content.headImg.fields.image"
    />
    <div class="imprint-body">
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
  name: 'Imprint',
  components: {TextSection, HeadImg, VueMarkdown},
  computed: {
    imprintStore () { return this.$store.state.pageImprintStore; },
    content () { return this.imprintStore.content[0]; },
    textSections () { return this.content.textSections; }
  }
};
</script>

<style scoped lang="scss">
  @import "Imprint";
</style>
