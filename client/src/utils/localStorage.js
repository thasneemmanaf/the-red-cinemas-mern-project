export const setLocalStorage = (key, initialValue) => {
  localStorage.setItem(key, JSON.stringify(initialValue));
};

export const getLocalStorage = (key, initialValue) =>
  localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;
