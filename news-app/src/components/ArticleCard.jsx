import React from 'react';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';
import Article from './Article';
import { arrIsEmpty } from '../features/arrayIsEmpty';
import { useSelector } from 'react-redux';

function ArticleCard({ articles, loading, error }) {
  const flexDisplay = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  };

  const { filters } = useSelector(state => state.filters);
  const { title } = useSelector(state => state.title);

  if (loading) {
    return (
      <PulseLoader
        css={flexDisplay}
        color={'#7ebffb'}
        loading={loading}
        size={25}
      />
    );
  } else if (error) {
    return <h1 data-test="error" style={{ color: 'white' }}>{error}</h1>;
  }
  return (
    <div>
      <p data-test="searched-title" style={{ color: 'white' }}>
        Titles:{' '}
        {title === '' ? (
          <span style={{ color: '#c6ff50' }}>All</span>
        ) : (
          `${title}`
        )}
      </p>
      <p data-test="searched-sources" style={{ color: 'white' }}>
        Sources:{' '}
        {arrIsEmpty(filters) ? (
          <span style={{ color: '#c6ff50' }}>All</span>
        ) : (
          `${filters}`
        )}
      </p>
      <Article articles={articles}></Article>
    </div>
  );
}

ArticleCard.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ArticleCard;
