<template>
    <div class="room-info">
      <div class="room-info-row">
        <div class="room-info-ground-plan">
          <ThumborImage
            :store="groundPlanImage"
            :dimensions="{
            sm: [400, 0]
          }"
          />
        </div>
      </div>
      <div class="room-info-row">
        <div class="room-info-text">
          <article class="room-info-text-description">
            {{description}}
          </article>
          <div class="room-info-text-request">
            <LocaleLink to="/buchungsanfrage">
              <ButtonSt>
                <IntlText id="room.info.request" />
              </ButtonSt>
            </LocaleLink>
            <p class="room-info-text-request-text">
              <IntlText id="room.info.minPrice" :values="{price: $n(minPrice, 'currency')}" />
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
import IntlText from '@/components/_shared/IntlText/IntlText';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'RoomInfo',
  components: {LocaleLink, IntlText, ButtonSt, ThumborImage},
  props: {
    groundPlanImage: {
      type: Object,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    minPrice: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RoomInfo';
</style>
