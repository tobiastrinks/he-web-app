<template>
    <div class="request-persons">
      <RequestItemTemplate :headline="$t('request.persons.headline')" :opened="opened">
        <template slot="right">
          <RequestPersonsItem
            v-for="(personConfig, index) in personsConfig"
            :key="index"
            :config="personConfig"
          />
        </template>
      </RequestItemTemplate>
    </div>
</template>

<script>
import { personsConfig } from './constants';
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';
import RequestPersonsItem from '../RequestPersonsItem/RequestPersonsItem';

export default {
  name: 'RequestPersons',
  components: {
    RequestItemTemplate,
    RequestPersonsItem
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      personsConfig
    };
  },
  created () {
    if (!this.$store.state.pageRequestStore.persons) {
      this.$store.commit('pageRequestStore/setPersons', personsConfig);
    }
  }
};
</script>
