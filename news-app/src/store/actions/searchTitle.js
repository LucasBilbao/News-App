const insertSearch = title => {
  return {
    type: 'INSERT_SEARCH',
    payload: title,
  };
};

const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH',
  };
};

export { insertSearch, clearSearch };
