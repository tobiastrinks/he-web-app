<template>
    <div class="request-summary-form-input">
      <div v-if="!hideLabel" class="request-summary-form-input-label">
        <label
          :for="`request-summary-form-input-${propertyName}`"
        >
          <IntlText :id="`request.summary.form.${propertyName}.label`" />
        </label>
      </div>
      <div class="request-summary-form-input-field" :class="{ fullWidth: hideLabel }">
        <input
          :id="`request-summary-form-input-${propertyName}`"
          class="request-input"
          :type="inputType"
          v-model="inputValue"
        />
      </div>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'RequestSummaryFormInput',
  components: {IntlText},
  props: {
    inputType: {
      type: String,
      required: false,
      default: 'text'
    },
    propertyName: {
      type: String,
      required: true
    },
    mutationName: {
      type: String,
      required: true
    },
    hideLabel: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    requestState () {
      return this.$store.state.pageRequestStore;
    },
    inputValue: {
      get () {
        return this.requestState[this.propertyName];
      },
      set (value) {
        this.$store.commit(`pageRequestStore/${this.mutationName}`, value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestSummaryFormInput";
</style>
