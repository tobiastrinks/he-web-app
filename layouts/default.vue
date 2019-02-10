<template>
  <div class="wrapper">
    <Nav />
    <nuxt />
    <Cookies />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/_shared/Nav/Nav';
import Footer from '@/components/_shared/Footer/Footer';
import Cookies from '@/components/_shared/Cookies/Cookies';

export default {
  components: {
    Cookies,
    Footer,
    Nav
  }
};
</script>

<style scoped lang="scss">
  @import 'default';
</style>
