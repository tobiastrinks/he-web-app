export const state = () => ({
  content: {
    loaded: false,
    logo: {
      fields: {
        title: 'Testlogo',
        file: {
          url: 'https://www.hotel-edison.de/temp/media/compressed/zimmer_doppel_comfort_plus2_360x240.jpg'
        }
      }
    }
  },
  mobileOpen: false
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  },
  setMobileOpen: (state, content) => {
    state.mobileOpen = content;
  }
};
