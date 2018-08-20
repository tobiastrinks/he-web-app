<template>
  <no-ssr placeholder="Loading...">
    <ThumborImageRendering :store="store" :dimensions="dimensions" :cover="cover" />
  </no-ssr>
</template>

<script>
import ThumborImageRendering from './ThumborImageRendering/ThumborImageRendering';

export default {
  name: 'ThumborImage',
  props: ['store', 'dimensions', 'cover'],
  components: {
    ThumborImageRendering
  }
};
</script>
