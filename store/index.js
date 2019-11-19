export const state = () => ({
  locales: ['de', 'en'],
  locale: null,
  cookieBannerClosed: true,
  popupClosed: true
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  setCookieBannerClosed (state, content) {
    state.cookieBannerClosed = content;
  },
  setPopupClosed (state, content) {
    state.popupClosed = content;
  }
};
