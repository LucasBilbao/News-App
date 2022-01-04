import React from 'react';
import { useDispatch } from 'react-redux';
import { insertSearch, clearSearch } from '../store/actions/searchTitle';

function Search() {
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.firstChild.value;
    if (value !== '') {
      dispatch(insertSearch(value));
    } else {
      dispatch(clearSearch());
    }
    e.target.firstChild.value = '';
  }

  return (
    <div className="search">
      <form data-test="search-form" action="submit" onSubmit={handleSubmit}>
        <input
          data-test="form-input"
          type="text"
          placeholder="Title"
          className="search-bar"
        />
        <button data-test="form-button" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
