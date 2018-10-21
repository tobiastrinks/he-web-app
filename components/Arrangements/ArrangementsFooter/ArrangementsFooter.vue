<template>
  <div
    class="arrangements-footer"
  >
    <vue-markdown>
      {{markdown}}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  name: 'ArrangementsFooter',
  components: { VueMarkdown },
  props: {
    markdown: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "ArrangementsFooter";
</style>
