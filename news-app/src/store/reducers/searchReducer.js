import { INSERT_SEARCH, CLEAR_SEARCH } from '../constants/searchConstants';

const initialState = {
  title: '',
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_SEARCH:
      return { ...state, title: action.payload };
    case CLEAR_SEARCH:
      return { ...state, title: '' };
    default:
      return state;
  }
}

export { searchReducer };
