<template>
  <div class="wrapper">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/_shared/Nav/Nav';
import Footer from '@/components/_shared/Footer/Footer';

export default {
  components: {
    Footer,
    Nav
  }
};
</script>

<style scoped lang="scss">
  @import 'default';
</style>
