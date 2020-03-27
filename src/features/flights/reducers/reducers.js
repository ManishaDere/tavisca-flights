import {
  CLEAR_SEARCH,
  SET_FILTER_BY,
  SET_RESULTS,
  SET_SEARCH,
  SET_SORT_BY,
} from '../actions/actions';

const initialState = {
  search: {},
  sortBy: 'duration:shortest:longest',
  filters: {},
  results: [],
};

function flights(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: {
          ...state.search,
          ...action.query,
        },
      };

    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };

    case SET_FILTER_BY:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.filters,
        },
      };

    case SET_RESULTS:
      return {
        ...state,
        results: action.results,
      };

    case CLEAR_SEARCH:
      return initialState;

    default:
      return state;
  }
}

export default flights;
