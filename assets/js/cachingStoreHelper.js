export const setLocalStorage = (key, object) => {
  if (process.browser) {
    window.localStorage.setItem(key, JSON.stringify(object));
  }
};

export const getLocalStorage = (key) => {
  if (process.browser) {
    const content = window.localStorage.getItem(key);

    if (content !== '') {
      return JSON.parse(window.localStorage.getItem(key));
    }
  }
};
