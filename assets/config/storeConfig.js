import {
  pageRoomStoreDefaultsLoader
} from '../js/storeDefaultsLoader';

export const modules = {
  nav: {
    storeName: 'navStore',
    contentType: 'navigation'
  },
  rooms: {
    storeName: 'roomsStore',
    contentType: 'room'
  },
  roomPriceEarlyBird: {
    storeName: 'roomPriceEarlyBirdStore',
    contentType: 'roomPriceEarlyBird'
  },
  bookingConditions: {
    storeName: 'bookingConditionsStore',
    contentType: 'bookingConditions'
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
    modules: []
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
    modules: [
      modules.rooms,
      modules.roomPriceEarlyBird,
      modules.bookingConditions
    ]
  },
  offers: {
    storeName: 'pageOffersStore',
    contentType: 'pageOffers',
    modules: []
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
  },
  imprint: {
    storeName: 'pageImprintStore',
    contentType: 'pageImprint',
    modules: []
  },
  dataProtection: {
    storeName: 'pageDataProtectionStore',
    contentType: 'pageDataProtection',
    modules: []
  }
};
