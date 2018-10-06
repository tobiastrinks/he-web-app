<template>
  <no-ssr>
    <ThumborImageRendering
      :store="store"
      :staticUrl="staticUrl"
      :dimensions="dimensions"
      :cover="cover"
      :adjustToWidth="adjustToWidth"
      :adjustToHeight="adjustToHeight"
    />
  </no-ssr>
</template>

<script>
import ThumborImageRendering from './ThumborImageRendering/ThumborImageRendering';

export default {
  name: 'ThumborImage',
  props: ['store', 'staticUrl', 'dimensions', 'cover', 'adjustToWidth', 'adjustToHeight'],
  components: {
    ThumborImageRendering
  }
};
</script>
