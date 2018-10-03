<template>
    <div class="contact-map box-shadow">
      <div class="contact-map-google">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115299.48620678257!2d11.645420758014568!3d54.1565691683199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ada914abe4b14b%3A0xad4fec607f898900!2sHotel+Edison+GmbH!5e0!3m2!1sde!2sde!4v1538546640994"
          width="100%"
          height="400"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="contact-map-info">
        <div class="contact-map-info-inner">
          <p class="contact-map-info-headline">
            <IntlText id="contact.map.headline" />
          </p>
          <p class="contact-map-info-item">
            <IntlText id="global.telephone.label" />
            <a :href="`tel:${$t('global.telephone.link')}`">
              <IntlText id="global.telephone.value" class="hover-scale" />
            </a>
          </p>
          <p class="contact-map-info-item">
            <IntlText id="global.email.label" />
            <a :href="`mailto:${$t('global.email.value')}`">
              <IntlText id="global.email.value" class="hover-scale" />
            </a>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import IntlText from '@/components/_shared/IntlText/IntlText';

export default {
  name: 'ContactMap',
  components: {IntlText}
};
</script>

<style scoped lang="scss">
  @import "ContactMap";
</style>
