<template>
    <div class="rooms-widgets-item" :class="{halfWidth, fullHeight}">
      <LocaleLink :to="to">
        <div class="rooms-widgets-item-img">
          <div class="rooms-widgets-item-img-transform">
            <ThumborImage
              v-if="image.fields.file"
              :store="image"
              :dimensions="{
                mo: [
                  600,
                  fullHeight ? 600 : 400
                ]
              }"
              :cover="true"
            />
          </div>
        </div>
        <p class="rooms-widgets-item-label" :class="{hide: hideLabel}">
          {{label}}
        </p>
      </LocaleLink>
    </div>
</template>

<script>
import {routes} from '@/assets/config/routesConfig';
import ThumborImage from '@/components/_shared/ThumborImage/ThumborImage';
import LocaleLink from '@/components/_shared/LocaleLink/LocaleLink';

export default {
  name: 'RoomsWidgetsItem',
  components: {LocaleLink, ThumborImage},
  props: {
    room: {
      type: Object,
      required: true
    },
    halfWidth: {
      type: Boolean,
      required: true
    },
    fullHeight: {
      type: Boolean,
      required: true
    },
    hideLabel: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    roomContent () { return this.room.fields; },
    image () { return this.roomContent.images[0]; },
    label () { return this.roomContent.nameOverview; },
    to () { return `${routes.ROOMS}${this.roomContent.route}`; }
  }
};
</script>

<style scoped lang="scss">
  @import "RoomsWidgetsItem";
</style>
