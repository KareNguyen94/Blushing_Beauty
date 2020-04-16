export const fetchMakeupData = () => {
  return fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
  .then(response => response.json());
};