<template>
  <div
    v-if="!$store.state.popupClosed"
    data-aos="fade-in"
    data-aos-once="true"
    :data-aos-delay="1000"
    class="popup"
  >
    <div class="popup-overlay" @click="closePopup"></div>
    <div class="popup-inner">
      <div
        class="popup-box"
        data-aos="zoom-in"
        data-aos-once="true"
        :data-aos-delay="1500"
      >
        <div class="popup-close" @click="closePopup">
          <FontAwesomeIcon
            :icon="['fas', 'times']"
          />
        </div>
        <p class="popup-text">
          {{ $t('popup.text') }}
        </p>
        <ButtonSt @click="closePopup" arrow="right">
          {{ $t('popup.button') }}
        </ButtonSt>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSt from '@/components/_shared/ButtonSt/ButtonSt';
export default {
  name: 'Popup',
  components: {ButtonSt},
  methods: {
    closePopup () {
      window.localStorage.setItem('popupClosed', '1');
      this.$store.commit('setPopupClosed', true);
    }
  },
  mounted () {
    const popupClosed = window.localStorage.getItem('popupClosed');
    const now = new Date().toISOString();
    if (!popupClosed && now > '2019-11-19T23:00:00Z' && now < '2019-11-20T23:00:00Z') {
      this.$store.commit('setPopupClosed', false);
    }
  }
};
</script>

<style scoped lang="scss">
  @import "~/assets/style/variables.scss";
  .popup {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;

    .popup-overlay {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.7);
    }

    .popup-inner {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 500px;

      .popup-box {
        position: relative;
        background-color: #fff;
        padding: 40px 30px;
        width: 100%;
        box-sizing: border-box;
        border-top: 8px solid $color-primary;

        .popup-close {
          position: absolute;
          right: 0;
          top: 0;
          padding: 15px 18px;

          &:hover {
            cursor: pointer;
          }
        }

        .popup-text {
          margin-bottom: 20px;
          line-height: 150%;
        }
      }
    }
  }
</style>
