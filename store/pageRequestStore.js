export const state = () => ({
  content: null,
  entryPoint: null,
  room: null,
  bookingType: null,
  dates: {
    from: null,
    to: null
  },
  activeArrangement: null,
  persons: null,
  extras: {
    parkingSpace: false,
    pet: false
  },
  comments: null,
  // personal data
  gender: null,
  firstName: null,
  lastName: null,
  street: null,
  houseNumber: null,
  zip: null,
  city: null,
  country: 'Deutschland',
  email: null,
  phone: null
});

export const mutations = {
  setContent: (state, content) => {
    state.content = content;
  },
  setEntryPoint: (state, content) => {
    state.entryPoint = content;
  },
  setRoom: (state, content) => {
    state.room = content;
  },
  setBookingType: (state, content) => {
    state.bookingType = content;
  },
  setDates: (state, content) => {
    state.dates = content;
  },
  setActiveArrangement: (state, content) => {
    state.activeArrangement = content;
  },
  setPersons: (state, content) => {
    state.persons = content;
  },
  setPerson: (state, content) => {
    if (state.persons && state.persons.length) {
      const persons = state.persons.slice();
      let hasSet = false;
      persons.forEach((person, index) => {
        if (person.minAge === content.minAge && person.maxAge === content.maxAge) {
          persons[index] = content;
          hasSet = true;
        }
      });
      if (!hasSet) {
        persons.push(content);
      }
      state.persons = persons;
    } else {
      state.persons = [content];
    }
  },
  setExtrasParkingSpace: (state, content) => {
    state.extras.parkingSpace = content;
  },
  setExtrasPet: (state, content) => {
    state.extras.pet = content;
  },
  setComments: (state, content) => {
    state.comments = content;
  },
  setGender: (state, content) => {
    state.gender = content;
  },
  setFirstName: (state, content) => {
    state.firstName = content;
  },
  setLastName: (state, content) => {
    state.lastName = content;
  },
  setStreet: (state, content) => {
    state.street = content;
  },
  setHouseNumber: (state, content) => {
    state.houseNumber = content;
  },
  setZip: (state, content) => {
    state.zip = content;
  },
  setCity: (state, content) => {
    state.city = content;
  },
  setCountry: (state, content) => {
    state.country = content;
  },
  setEmail: (state, content) => {
    state.email = content;
  },
  setPhone: (state, content) => {
    state.phone = content;
  }
};
