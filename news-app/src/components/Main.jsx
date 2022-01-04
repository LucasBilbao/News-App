import React from 'react';
import ArticleCard from './ArticleCard.jsx';
import PropTypes from 'prop-types';

function Main({ articles, loading, error }) {
  return (
    <div className="wrapper">
      <main>
        <ArticleCard
          articles={articles}
          error={error}
          loading={loading}
        ></ArticleCard>
      </main>
    </div>
  );
}

Main.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Main;
