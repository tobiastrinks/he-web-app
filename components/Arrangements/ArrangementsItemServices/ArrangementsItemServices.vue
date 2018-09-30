<template>
    <div class="arrangements-item-services">
      <h2 class="arrangements-item-services-headline">{{arrangement.name}}</h2>
      <div class="arrangements-item-services-subheadline">
        <hr class="hr-inline" />
        <span>{{arrangement.subHeadline}}</span>
      </div>
      <div class="arrangements-item-services-description">
        <vue-markdown :key="arrangement.description">
          {{arrangement.description}}
        </vue-markdown>
      </div>
      <ButtonSt :alignLeft="true">
        <IntlText id="arrangements.item.requestButton" />
      </ButtonSt>
    </div>
</template>

<script>
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'ArrangementsItemServices',
  components: {
    ButtonSt,
    IntlText,
    VueMarkdown
  },
  props: {
    arrangement: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import "ArrangementsItemServices";
</style>
