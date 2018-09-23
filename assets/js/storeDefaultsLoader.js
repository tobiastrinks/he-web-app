import {priceTypes, priceYearConfig} from '@/components/Room/RoomPrices/constants';

export const pageRoomStoreDefaultsLoader = (store) => {
  const roomStore = store.state.pageRoomStore;
  const rooms = store.state.roomsStore.content;

  if (!roomStore.priceType) {
    store.commit('pageRoomStore/setPriceType', priceTypes.HP);
  }

  if (!roomStore.priceYear) {
    const years = rooms[0].prices.map(priceItem => priceItem.fields.year);
    const priceYearAvailable = years.filter((module, index, self) => {
      return self.indexOf(module) === index;
    }).sort();

    const date = new Date();
    const defaultYear =
      (date.getMonth() + 1 >= priceYearConfig.nextYearAsDefaultFromMonth)
        ? date.getFullYear() + 1
        : date.getFullYear();

    const defaultYearAvailable =
      (priceYearAvailable.indexOf(defaultYear) !== -1)
        ? defaultYear
        : priceYearAvailable[0];

    store.commit('pageRoomStore/setPriceYear', defaultYearAvailable);
  }
};
