<template>
  <div class="data-protection">
    <div class="page-head">
      <HeadImg
        :headline="content.headImg.fields.headline"
        :sub-headline="content.headImg.fields.subHeadline"
        :image="content.headImg.fields.image"
      />
    </div>
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
import { setLocalStorage } from '@/assets/js/cachingStoreHelper';

export default {
  name: 'DataProtection',
  components: {TextSection, HeadImg, VueMarkdown},
  computed: {
    dataProtectionStore () { return this.$store.state.pageDataProtectionStore; },
    content () { return this.dataProtectionStore.content[0]; },
    textSections () { return this.content.textSections; }
  },
  methods: {
    gaOptOutEventListener (e) {
      const href = e.target.attributes.href.value;
      if (href === '#ga-opt-out') {
        e.preventDefault();
        this.$ga.disable();
        setLocalStorage('gaOptOut', true);
        alert(this.$t('global.gaOptOut'));
      }
    },
    setGaOptOutEventListener () {
      const imprintBodyLinks = document.querySelectorAll('.data-protection-body a');
      imprintBodyLinks.forEach(imprintBodyLink => {
        imprintBodyLink.addEventListener('click', this.gaOptOutEventListener);
      });
    },
    removeGaOptOutEventListener () {
      const imprintBodyLinks = document.querySelectorAll('.data-protection-body a');
      imprintBodyLinks.forEach(imprintBodyLink => {
        imprintBodyLink.removeEventListener('click', this.gaOptOutEventListener);
      });
    }
  },
  mounted () {
    this.$ga.page(this.$router);
    this.setGaOptOutEventListener();
  },
  beforeDestroy () {
    this.removeGaOptOutEventListener();
  }
};
</script>

<style scoped lang="scss">
  @import "DataProtection";
</style>
