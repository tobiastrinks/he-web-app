<template>
  <no-ssr placeholder="Loading...">
    <ThumborImageRendering :store="store" :dimensions="dimensions" />
  </no-ssr>
</template>

<script>
import ThumborImageRendering from './ThumborImageRendering/ThumborImageRendering';

export default {
  name: 'ThumborImage',
  props: {
    store: {
      type: Object,
      required: true
    },
    dimensions: {
      type: Object,
      required: true
    }
  },
  components: {
    ThumborImageRendering
  }
};
</script>
