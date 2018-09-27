<template>
    <div class="request-persons-item">
      <input
        class="request-persons-item-input request-input"
        :id="config.labelId"
        type="text"
        v-model="count"
      />
      <label :for="config.labelId">
        {{personLabel}}
      </label>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';
import { getPersonLabel } from '@/components/Request/utils';

export default {
  name: 'RequestPersonsItem',
  components: {IntlText},
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    persons () {
      return this.$store.state.pageRequestStore.persons;
    },
    personLabel () {
      return getPersonLabel(this, this.config);
    },
    count: {
      get () {
        return this.persons.filter(person => {
          return (
            person.minAge === this.config.minAge &&
            person.maxAge === this.config.maxAge
          );
        })[0].count;
      },
      set (value) {
        const newCount = (value !== '') ? parseInt(value) : value;
        const updatedPerson = {
          ...this.config,
          count: newCount
        };
        this.$store.commit('pageRequestStore/setPerson', updatedPerson);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "RequestPersonsItem";
</style>
