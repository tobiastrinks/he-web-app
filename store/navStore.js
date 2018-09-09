export const state = () => ({
  content: null,
  mobileOpen: false,
  opacityEnabled: false
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  },
  setMobileOpen: (state, content) => {
    state.mobileOpen = content;
  },
  enableOpacity: (state) => {
    state.opacityEnabled = true;
  },
  resetOpacityEnabled: (state) => {
    state.opacityEnabled = false;
  }
};
