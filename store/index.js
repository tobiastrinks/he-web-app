export const state = () => ({
  locales: ['de', 'en'],
  locale: null,
  cookieBannerClosed: true
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  setCookieBannerClosed (state, content) {
    state.cookieBannerClosed = content;
  }
};
