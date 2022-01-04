import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
import placeholder from '..//assets/img-placeholder.jpg';

function DisplayArticle({ articles, loading, error }) {
  const { id } = useParams();

  const flexDisplay = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: '100px',
  };

  const style = {
    color: 'white',
    width: '100%',
    textAlign: 'center',
  };

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
    return (
      <div className="wrapper">
        <h1 style={style}>{error}</h1>;
      </div>
    );
  }
  return (
    <div>
      <Link to="/News-App/" className="back">
        <button>Back</button>
      </Link>
      <div className="wrapper">
        {articles
          .filter(article => article.title === decodeURI(id))
          .map(article => {
            return (
              <div key={article.url} className="article">
                <h1 data-test="article-title">{article.title}</h1>
                {article.image ? (
                  <img src={article.image} alt="loading..." />
                ) : (
                  <img src={placeholder} />
                )}
                <p>{article.content}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

DisplayArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default DisplayArticle;
