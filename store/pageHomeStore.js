export const state = () => ({
  content: null,
  offerMiniOpen: true
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  },
  hideOfferMini: (state) => {
    state.offerMiniOpen = false;
  }
};
