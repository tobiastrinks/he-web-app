import {
  pageRoomStoreDefaultsLoader
} from '../js/storeDefaultsLoader';

export const modules = {
  nav: {
    storeName: 'navStore',
    contentType: 'navigation'
  },
  focusOffers: {
    storeName: 'focusOfferStore',
    contentType: 'focusOffer'
  },
  rooms: {
    storeName: 'roomsStore',
    contentType: 'room'
  },
  arrangements: {
    storeName: 'arrangementStore',
    contentType: 'arrangement'
  }
};

export const defaultModules = [
  modules.nav
];

export const pageModules = {
  home: {
    storeName: 'pageHomeStore',
    contentType: 'pageHome',
    modules: [modules.focusOffers]
  },
  rooms: {
    storeName: 'pageRoomsStore',
    contentType: 'pageRooms',
    modules: []
  },
  room: {
    storeName: 'pageRoomStore',
    storeDefaultsLoader: pageRoomStoreDefaultsLoader,
    modules: [modules.rooms]
  }
};
