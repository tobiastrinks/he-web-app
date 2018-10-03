<template>
    <div class="request-summary-form">
      <p class="request-summary-form-headline">
        <IntlText id="request.summary.form.headline" />
      </p>
      <form>
        <RequestSummaryFormGender />
        <RequestSummaryFormInput propertyName="firstName" mutationName="setFirstName" />
        <RequestSummaryFormInput propertyName="lastName" mutationName="setLastName" />
        <div class="request-summary-form-split">
          <RequestSummaryFormInput class="request-summary-form-street-item" propertyName="street" mutationName="setStreet" />
          <span class="request-summary-form-slash"> / </span>
          <RequestSummaryFormInput class="request-summary-form-street-item" :hideLabel="true" propertyName="houseNumber" mutationName="setHouseNumber" />
        </div>
        <div class="request-summary-form-split">
          <RequestSummaryFormInput class="request-summary-form-zip-item" propertyName="plz" mutationName="setPlz" />
          <span class="request-summary-form-slash"> / </span>
          <RequestSummaryFormInput class="request-summary-form-city-item" :hideLabel="true" propertyName="city" mutationName="setCity" />
        </div>
        <RequestSummaryFormInput class="request-summary-form-country-item" propertyName="country" mutationName="setCountry" />
        <RequestSummaryFormInput class="request-summary-form-email-item" inputType="email" propertyName="email" mutationName="setEmail" />
        <RequestSummaryFormInput class="request-summary-form-telephone-item" inputType="tel" propertyName="phone" mutationName="setPhone" />
      </form>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import RequestSummaryFormInput from '@/components/Request/RequestSummaryFormInput/RequestSummaryFormInput';
import RequestSummaryFormGender from '@/components/Request/RequestSummaryFormGender/RequestSummaryFormGender';

export default {
  name: 'RequestSummaryForm',
  components: {RequestSummaryFormGender, RequestSummaryFormInput, IntlText}
};
</script>

<style lang="scss">
  @import 'RequestSummaryForm';
</style>
