export const setLocalStorage = (key, initialValue) => {
  localStorage.setItem(key, JSON.stringify(initialValue));
};

export const getLocalStorage = (key) =>
  localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
