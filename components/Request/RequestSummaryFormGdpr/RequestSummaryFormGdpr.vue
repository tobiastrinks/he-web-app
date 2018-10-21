<template>
  <div class="request-summary-form-gdpr">
    <input
      type="checkbox"
      id="request-summary-form-gdpr-checkbox"
      v-model="gdpr"
    />
    <label for="request-summary-form-gdpr-checkbox">
      <IntlText id="request.summary.form.gdpr.label" />
    </label>
  </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestSummaryFormGdpr',
  components: {IntlText},
  computed: {
    requestState () {
      return this.$store.state.pageRequestStore;
    },
    gdpr: {
      get () {
        return this.requestState.gdpr;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setGdpr', value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestSummaryFormGdpr.scss";
</style>
