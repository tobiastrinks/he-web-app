export const state = () => ({
  locales: ['de', 'en'],
  locale: null
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};
