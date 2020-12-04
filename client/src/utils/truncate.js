// To truncate movie description in the banner
const truncate = (str, n) => {
  return str.length > n ? `${str.substr(0, n - 1)}...` : str;
};

export default truncate;
