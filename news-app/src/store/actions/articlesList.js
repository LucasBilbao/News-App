import axios from 'axios';

const apiKey = 'b926fccac30a93558e255833c13e85da';

function fetchArticles() {
  return async dispatch => {
    try {
      dispatch({ type: 'FETCH_ARTICLES' });
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?lenguage=en&country=us&token=${apiKey}`
      );
      setTimeout(() => {
        dispatch({
          type: 'FETCH_ARTICLES_SUCCESS',
          payload: response.data.articles,
        });
      }, 1000);
    } catch (e) {
      dispatch({
        type: 'FETCH_ARTICLES_ERROR',
        payload: 'An error has occured while fetching the data',
      });
    }
  };
}

export { fetchArticles };
