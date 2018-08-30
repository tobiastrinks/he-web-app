<template>
  <div class="wrapper">
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/_shared/Nav/Nav';

export default {
  components: {
    Nav
  }
};
</script>

<style scoped lang="scss">
  @import 'default';
</style>
