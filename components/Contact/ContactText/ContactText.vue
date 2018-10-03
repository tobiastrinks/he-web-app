<template>
  <div class="contact-text">
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
</template>

<script>
import TextSection from '@/components/_shared/TextSection/TextSection';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'ContactText',
  components: {TextSection, VueMarkdown},
  computed: {
    contactStore () { return this.$store.state.pageContactStore; },
    textSections () { return this.contactStore.content[0].textSections; }
  }
};
</script>

<style scoped lang="scss">
  @import "ContactText";
</style>
