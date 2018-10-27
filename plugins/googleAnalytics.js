import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import { getLocalStorage } from '~/assets/js/cachingStoreHelper';

const optOut = getLocalStorage('gaOptOut') || false;

Vue.use(VueAnalytics, {
  id: 'UA-50984323-1',
  disabled: (process.env.NODE_ENV === 'development') || optOut,
  set: [
    { field: 'anonymizeIp', value: true }
  ]
});
