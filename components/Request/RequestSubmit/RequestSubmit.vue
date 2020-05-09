<template>
    <div class="request-submit">
      <ButtonSt @click="submitRequest" :inverted="true" :disabled="validateForm !== true || requestStore.pending">
        <IntlText v-if="!requestStore.pending" id="request.submit.button" />
        <IntlText v-else id="request.submit.pending" />
      </ButtonSt>
      <div class="request-submit-contact">
        <div class="request-submit-contact-text">
          <vue-markdown>{{content.submitContact}}</vue-markdown>
        </div>
        <div class="request-submit-contact-phone hover-scale" v-if="content.submitContactPhone">
          <a :href="`tel:${content.submitContactPhone.replace(/[^0-9]/, '')}}`">
            {{content.submitContactPhone}}
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { validateEmail } from '@/components/Request/utils';
import { getLocaleDateString } from '@/assets/js/dateUtils';
import { bookingTypes, bookingTypesForm } from '@/components/Request/constants';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'RequestSubmit',
  components: {IntlText, ButtonSt, VueMarkdown},
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
      } else if (!s.zip) {
        return t('zip');
      } else if (!s.city) {
        return t('city');
      } else if (!s.country) {
        return t('country');
      } else if (!s.email || !validateEmail(s.email)) {
        return t('email');
      } else if (!s.phone) {
        return t('phone');
      } else if (!s.gdpr) {
        return t('gdpr');
      } else {
        return true;
      }
    },
    content () {
      return this.$store.state.pageRequestStore.content[0];
    }
  },
  methods: {
    constructRequest () {
      const s = this.requestStore;
      const request = {
        bookingType: this.$t(
          bookingTypesForm.filter(item => item.value === s.bookingType)[0].intlId,
          'de'
        ),
        dates: {
          from: getLocaleDateString(s.dates.from),
          to: getLocaleDateString(s.dates.to)
        },
        activeArrangement: (s.bookingType === bookingTypes.ARR && s.activeArrangement)
          ? s.activeArrangement.officialName || s.activeArrangement.name
          : undefined,
        selectedOffers: (s.selectedOffers && s.selectedOffers.length)
          ? s.selectedOffers.join(', ')
          : undefined,
        room: s.room.id,
        persons: s.persons.filter(person => person.count > 0).map(person => {
          const age = this.$t('request.persons.fromLabel', 'de', {from: person.minAge});
          return `${person.count} ${age}`;
        }).join(', '),
        extras: (s.extras.pet)
          ? ['pet'].filter(key => s.extras[key]).map(key => {
            return this.$t(`request.extras.${key}`, 'de');
          }).join(', ')
          : undefined,
        comments: (s.comments && s.comments.length) ? s.comments : undefined,
        gender: this.$t(`request.summary.form.gender.${s.gender}`, 'de'),
        firstName: s.firstName,
        lastName: s.lastName,
        street: s.street,
        houseNumber: s.houseNumber,
        zip: s.zip,
        city: s.city,
        country: s.country,
        email: s.email,
        phone: s.phone,
        gdpr: s.gdpr ? this.$t(`request.summary.form.gdpr.yes`) : this.$t(`request.summary.form.gdpr.no`)
      };
      for (let key in request) {
        if (request[key] === undefined) {
          delete request[key];
        }
      }
      return request;
    },
    submitRequest () {
      if (this.requestStore.pending) {
        return;
      }

      const validation = this.validateForm;
      if (validation === true) {
        this.$store.commit('pageRequestStore/pending');
        axios.post(`${process.env.apiUrl}/contact/booking-request`, this.constructRequest())
          .then(() => {
            this.$store.commit('pageRequestStore/submitted');
            window.scrollTo(0, 0);
          })
          .catch(error => {
            this.$store.commit('pageRequestStore/pending', false);
            alert(this.$t('request.submit.error'));
            console.error(error);
          });
      } else {
        alert(validation);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestSubmit";
</style>
