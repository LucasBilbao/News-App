import { FILTER, UNFILTER } from '../constants/filterConstants';

const initialState = {
  filters: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER:
      return { ...state, filters: [...state.filters, action.payload] };
    case UNFILTER:
      return {
        ...state,
        filters: state.filters.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
};

export { filterReducer };
