const filter = filters => {
  return {
    type: 'FILTER',
    payload: filters,
  };
};

const unFilter = filters => {
  return {
    type: 'UNFILTER',
    payload: filters,
  };
};

export { filter, unFilter };
