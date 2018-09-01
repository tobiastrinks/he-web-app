<template>
    <article class="intro-text">
      <vue-markdown>{{content}}</vue-markdown>
    </article>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'IntroText',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  components: {
    VueMarkdown
  }
};
</script>

<style scoped lang="scss">
  @import 'IntroText';
</style>
