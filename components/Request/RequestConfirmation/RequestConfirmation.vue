<template>
  <div class="request-confirmation">
    <p class="request-confirmation-message">
      {{content.confirmationMessage}}
    </p>
    <div class="request-confirmation-button">
      <LocaleLink :to="routes.HOME">
        <ButtonSt>
          <IntlText id="request.confirmation.backHome" />
        </ButtonSt>
      </LocaleLink>
    </div>
  </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestConfirmation',
  components: {IntlText, ButtonSt, LocaleLink},
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    content () { return this.requestStore.content[0]; }
  },
  data () {
    return {
      routes
    };
  }
};
</script>

<style scoped lang="scss">
  @import "RequestConfirmation";
</style>
