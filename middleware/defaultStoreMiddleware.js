module.exports = ({ store }) => {
  store.commit('navStore/setMobileOpen', false);
  store.commit('navStore/resetOpacityEnabled');
};
