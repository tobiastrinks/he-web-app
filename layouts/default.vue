<template>
  <div>
    <Nav />
    <nuxt/>
  </div>
</template>

<script>
import Nav from '~/components/_shared/Nav/Nav';

export default {
  components: { Nav }
};
</script>

<style>
  body, p {
    padding: 0;
    margin: 0;
  }
</style>
