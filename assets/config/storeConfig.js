export const modules = {
  nav: {
    storeName: 'navStore',
    contentType: 'navigation'
  },
  footer: {
    storeName: 'footerStore',
    contentType: 'footer'
  },
  focusOffers: {
    storeName: 'focusOfferStore',
    contentType: 'focusOffer'
  },
  rooms: {
    storeName: 'roomStore',
    contentType: 'rooms'
  },
  arrangements: {
    storeName: 'arrangementStore',
    contentType: 'arrangement'
  }
};

export const defaultModules = [
  modules.nav,
  modules.footer
];

export const pageModules = {
  home: {
    storeName: 'pageHomeStore',
    contentType: 'pageHome',
    modules: [modules.focusOffers]
  }
};
