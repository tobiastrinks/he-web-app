export const state = () => ({
  content: null
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  }
};
