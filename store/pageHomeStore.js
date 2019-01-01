export const state = () => ({
  content: null,
  offerMiniOpen: null
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
    if (content[0].miniOffers && !state.offerMiniOpen && content) {
      // initialize offerMiniOpen state
      state.offerMiniOpen = content[0].miniOffers.map(() => true);
    }
  },
  hideOfferMini: (state, index) => {
    const newOfferMiniOpen = state.offerMiniOpen.slice();

    newOfferMiniOpen[index] = false;
    state.offerMiniOpen = newOfferMiniOpen;
  }
};
