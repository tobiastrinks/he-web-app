export const setLocalStorage = (key, object) => {
  window.setLocalStorage(key, JSON.stringify(object));
};

export const getLocalStorage = (key) => {
  const content = window.getLocalStorage(key);

  if (content !== '') {
    return JSON.encode(window.getLocalStorage(key));
  }
};
