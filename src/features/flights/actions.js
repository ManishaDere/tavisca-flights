export const SET_SEARCH = 'SET_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_FILTER_BY = 'SET_FILTER_BY';
export const SET_RESULTS = 'SET_RESULTS';

export function setSearch(query) {
  return {
    type: SET_SEARCH,
    query,
  };
}

export function setSortByOption(sortBy) {
  return {
    type: SET_SORT_BY,
    sortBy,
  };
}

export function setFilterByOption(filters) {
  return {
    type: SET_FILTER_BY,
    filters,
  };
}

export function setResults(results) {
  return {
    type: SET_RESULTS,
    results,
  };
}
