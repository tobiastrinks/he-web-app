export const getPersonLabel = (vue, personConfig) => {
  const label = [];

  label.push(vue.$t(personConfig.labelId));
  if (personConfig.maxAge) {
    label.push(vue.$t('request.persons.fromToLabel', { from: personConfig.minAge, to: personConfig.maxAge }));
  } else {
    label.push(vue.$t('request.persons.fromLabel', { from: personConfig.minAge }));
  }

  return label.join(' ');
};

export const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
