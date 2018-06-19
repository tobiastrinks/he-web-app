<template>
  <div>{{arrangements}}</div>
</template>

<script>
import Contentful from '~/assets/js/contentfulHelper';
const contentful = new Contentful;

export default {
  asyncData () {
    return contentful.getByContentType('arrangement').then(res => {
      return {
        arrangements: res.items
      };
    }).catch(console.log);
  }
}
</script>
