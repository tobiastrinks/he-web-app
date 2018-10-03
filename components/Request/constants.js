export const entryPoints = {
  DEFAULT: 'DEFAULT',
  ROOM: 'ROOM',
  ARRANGEMENT: 'ARRANGEMENT'
};

export const bookingTypes = {
  UF: 'uf',
  HP: 'hp',
  ARR: 'arr'
};

export const bookingTypesForm = [
  {
    value: bookingTypes.UF,
    intlId: 'request.bookingType.uf'
  },
  {
    value: bookingTypes.HP,
    intlId: 'request.bookingType.hp'
  },
  {
    value: bookingTypes.ARR,
    intlId: 'request.bookingType.arr'
  }
];
