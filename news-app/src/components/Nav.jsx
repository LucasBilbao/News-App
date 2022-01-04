import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter, unFilter } from '../store/actions/filtersList';
import { eventTargetContainsClass } from '../features/eventTargetContainsClass';
import { getSortedUniqueArrayOf } from '../features/getSortedUniqueArrayOf';

function Nav() {
  const { articles } = useSelector(state => state.articles);
  const { filters } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const activate = e => {
    e.target.classList.toggle('activated');
    if (eventTargetContainsClass(e, 'activated')) {
      dispatch(filter(e.target.innerHTML));
    } else {
      dispatch(unFilter(e.target.innerHTML));
    }
  };

  const sources = getSortedUniqueArrayOf(articles);

  return (
    <nav>
      <ul className="domains">
        {sources.map(source => {
          return (
            <li
              className={filters.includes(source) ? 'activated': ''}
              key={source}
              onClick={activate}
            >
              {source}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
