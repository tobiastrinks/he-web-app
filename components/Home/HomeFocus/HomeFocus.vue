<template>
    <div class="home-focus">
      <div class="home-focus-head">
        <h2 class="home-focus-headline">
          <IntlText id="home.focus.headline" />
        </h2>
        <hr class="hr-short" />
        <p class="home-focus-subheadline">
          <IntlText id="home.focus.subheadline" />
        </p>
      </div>
      <HomeFocusSlider />
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import HomeFocusSlider from '@/components/Home/HomeFocusSlider/HomeFocusSlider';
export default {
  name: 'HomeFocus',
  components: {HomeFocusSlider, IntlText}
};
</script>

<style scoped lang="scss">
  @import 'HomeFocus';
</style>
