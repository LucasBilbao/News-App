import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import PropTypes from 'prop-types';

function HomePage({ articles, loading, error }) {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Main articles={articles} error={error} loading={loading}></Main>
    </div>
  );
}

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default HomePage;
