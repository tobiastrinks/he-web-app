export const state = () => ({
  content: null,
  showHolidays: false
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  },
  setShowHolidays: (state, content) => {
    state.showHolidays = content;
  }
};
