<template>
    <div class="request-summary-form-gender">
      <div class="request-summary-form-gender-label">
        <IntlText id="request.summary.form.gender.label" />
      </div>
      <div class="radio-wrapper request-summary-form-gender-input">
        <div class="radio-item">
          <input
            id="request-summary-form-item-gender-male"
            name="request-summary-gender"
            type="radio"
            value="male"
            v-model="gender"
            required
          />
          <label for="request-summary-form-item-gender-male">
            <IntlText id="request.summary.form.gender.male" />
          </label>
        </div>
        <div class="radio-item">
          <input
            id="request-summary-form-item-gender-female"
            name="request-summary-gender"
            type="radio"
            value="female"
            v-model="gender"
            required
          />
          <label for="request-summary-form-item-gender-female">
            <IntlText id="request.summary.form.gender.female" />
          </label>
        </div>
      </div>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestSummaryFormGender',
  components: {IntlText},
  computed: {
    requestState () {
      return this.$store.state.pageRequestStore;
    },
    gender: {
      get () {
        return this.requestState.gender;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setGender', value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestSummaryFormGender";
</style>
