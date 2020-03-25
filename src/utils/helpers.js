import { localeCurrenciesMap } from '../app/constants';

export function getCurrency(locale) {
  return localeCurrenciesMap[locale];
}
