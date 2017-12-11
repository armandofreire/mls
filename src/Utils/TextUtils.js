import getSymbolFromCurrency from 'currency-map-symbol'

export function formatPrice(currency, price) {
  return `${getSymbolFromCurrency(currency)} ${price.toLocaleString(currency).replace(',','.')}`;
}