<template>
    <div class="request-submit">
      <ButtonSt @click="submitRequest" :inverted="true" :disabled="validateForm !== true">
        <IntlText id="request.submit.button" />
      </ButtonSt>
      <div class="request-submit-contact">
        <p class="request-submit-contact-text">
          <vue-markdown>{{content.submitContact}}</vue-markdown>
        </p>
        <div class="request-submit-contact-phone hover-scale" v-if="content.submitContactPhone">
          <a :href="`tel:${content.submitContactPhone.replace(/[^0-9]/, '')}}`">
            {{content.submitContactPhone}}
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import { validateEmail } from '@/components/Request/utils';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RequestSubmit',
  components: {IntlText, ButtonSt, VueMarkdown},
  methods: {
    submitRequest () {
      const validation = this.validateForm;

      if (validation === true) {
        console.log('submit');
      } else {
        alert(validation);
      }
    }
  },
  computed: {
    requestStore () {
      return this.$store.state.pageRequestStore;
    },
    validateForm () {
      const s = this.requestStore;
      const t = (field) => {
        return this.$t(`request.summary.form.${field}.invalid`);
      };

      if (!s.gender) {
        return t('gender');
      } else if (!s.firstName) {
        return t('firstName');
      } else if (!s.lastName) {
        return t('lastName');
      } else if (!s.street) {
        return t('street');
      } else if (!s.houseNumber) {
        return t('houseNumber');
      } else if (!s.plz) {
        return t('plz');
      } else if (!s.city) {
        return t('city');
      } else if (!s.country) {
        return t('country');
      } else if (!s.email || !validateEmail(s.email)) {
        return t('email');
      } else {
        return true;
      }
    },
    content () {
      return this.$store.state.pageRequestStore.content[0];
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestSubmit";
</style>
