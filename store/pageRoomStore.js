export const state = () => ({
  priceType: null,
  priceYear: null
});

export const mutations = {
  setPriceType (state, value) {
    state.priceType = value;
  },
  setPriceYear (state, value) {
    state.priceYear = value;
  }
};
