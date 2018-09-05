import Vue from 'vue';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faBrands from '@fortawesome/fontawesome-free-brands';
import faRegular from '@fortawesome/fontawesome-free-regular';
import faSolid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faBrands, faRegular, faSolid);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
