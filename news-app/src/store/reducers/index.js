import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { filterReducer } from './filterReducer';
import { searchReducer } from './searchReducer';

export const rootReducers = combineReducers({
  articles: articlesReducer,
  filters: filterReducer,
  title: searchReducer,
});
