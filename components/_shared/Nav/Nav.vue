<template>
  <NavSt>
    <nuxt-link to="/home">
      <ThumborImage
        :store="content.logo"
        :dimensions="{
          sm: [300,0],
          md: [400,0],
          lg: [500,0]
        }"
      />
    </nuxt-link>
  </NavSt>
</template>

<script>
import ThumborImage from '~/components/_shared/ThumborImage/ThumborImage';
import {
  NavSt,
  NavLogoSt
} from './Nav.css';

export default {
  name: 'Nav',
  components: {
    ThumborImage,
    NavSt,
    NavLogoSt
  },
  computed: {
    content () { return this.$store.state.navStore.content; }
  }
};
</script>

<style scoped>

</style>
