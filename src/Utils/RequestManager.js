import axios from 'axios';


export function searchItem(query) {
  return axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
    .then(function (response) {
      const items = response.data.results.slice(0,4);
      return items;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function getItemDetails(itemId) {
  let itemDetails = {};
  return axios.get(`https://api.mercadolibre.com/items/${itemId}`)
    .then(function (response) {
      itemDetails.details = response.data;
      return axios.get(`https://api.mercadolibre.com/items/${itemId}/description`)
        .then(function (response) {
          itemDetails.description = response.data;
          return itemDetails;
        })
    })
    .catch(function (error) {
      console.log(error);
    });
}