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
    storeName: 'arrangementsStore',
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
  hotel: {
    storeName: 'pageHotelStore',
    contentType: 'pageHotel',
    modules: []
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
  },
  arrangements: {
    storeName: 'pageArrangementsStore',
    contentType: 'pageArrangements',
    modules: [modules.arrangements, modules.rooms]
  },
  request: {
    storeName: 'pageRequestStore',
    contentType: 'pageRequest',
    modules: [modules.arrangements, modules.rooms]
  },
  contact: {
    storeName: 'pageContactStore',
    contentType: 'pageContact',
    modules: []
  }
};
