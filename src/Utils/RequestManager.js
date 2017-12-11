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
