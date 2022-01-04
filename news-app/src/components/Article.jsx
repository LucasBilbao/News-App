import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTimeFormatted } from '../features/timeFormatted';
import placeholder from '..//assets/img-placeholder.jpg';
import { arrIsEmpty } from '../features/arrayIsEmpty';
import PropTypes from 'prop-types';

function Article({ articles }) {
  let articlesRemoved = 0;

  const { filters } = useSelector(state => state.filters);
  const { title } = useSelector(state => state.title);

  const filterArticleSources = article => {
    if (arrIsEmpty(filters)) {
      return article;
    } else {
      if (filters.includes(article.source.name)) {
        return true;
      } else {
        articlesRemoved += 1;
        return false;
      }
    }
  };

  const filterTitles = article => {
    if (title === '') {
      return article;
    } else {
      if (article.title.toLowerCase().includes(title.toLowerCase())) {
        return true;
      } else {
        articlesRemoved += 1;
        return false;
      }
    }
  };

  // console.log(articles[0]);

  return (
    <div data-test="component-article">
      {articles
        .filter(filterArticleSources)
        .filter(filterTitles)
        .map((article, index) => {
          return (
            <article key={index}>
              <div className="info">
                <p>{article.source.name}</p>
                <p>{getTimeFormatted(new Date(article.publishedAt))}</p>
              </div>
              {article.image ? (
                <img
                  src={article.image}
                  alt="loading..."
                  onError={e => {
                    e.target.src = placeholder;
                  }}
                />
              ) : (
                <img src={placeholder} />
              )}
              <div className="content">
                <h1 data-test="article-title">{article.title}</h1>
                <p data-test="article-description">{article.description}</p>
                <Link to={`/News-App/article/${article.title}`}>Read More</Link>
              </div>
            </article>
          );
        })}
      {articlesRemoved === articles.length && (
        <h1 style={{ color: 'white' }}>There are no articles...</h1>
      )}
    </div>
  );
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
};

export default Article;
