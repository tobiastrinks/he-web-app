export const state = () => ({
  priceType: null,
  priceYear: null,
  notesActive: {}
});

export const mutations = {
  setPriceType (state, value) {
    state.priceType = value;
  },
  setPriceYear (state, value) {
    state.priceYear = value;
  },
  setNotesActive (state, value) {
    state.notesActive = value;
  },
  resetNotesActive (state) {
    state.notesActive = {};
  }
};
