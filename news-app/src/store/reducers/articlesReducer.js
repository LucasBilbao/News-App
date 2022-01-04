import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from '../constants/articlesConstants';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, loading: true, error: null, articles: [] };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        articles: action.payload,
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        articles: [],
      };
    default:
      return state;
  }
};

export { articlesReducer };
