<template>
  <div class="wrapper">
    <Nav />
    <nuxt />
    <Cookies />
    <Footer />
    <Popup />
  </div>
</template>

<script>
import Nav from '~/components/_shared/Nav/Nav';
import Footer from '@/components/_shared/Footer/Footer';
import Cookies from '@/components/_shared/Cookies/Cookies';
import Popup from '@/components/_shared/Popup/Popup';

export default {
  components: {
    Popup,
    Cookies,
    Footer,
    Nav
  }
};
</script>

<style scoped lang="scss">
  @import 'default';
</style>
