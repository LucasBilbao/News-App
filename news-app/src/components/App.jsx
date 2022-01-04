import React, { useEffect } from 'react';
import DisplayArticle from './DisplayArticle';
import HomePage from './HomePage';
import NotFound from './NotFound';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../store/actions/articlesList';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  const { articles, error, loading } = useSelector(state => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/lucasbilbao-JSFEGE/"
          exact
          element={
            <HomePage
              articles={articles}
              error={error}
              loading={loading}
            ></HomePage>
          }
        ></Route>
        <Route
          path="/lucasbilbao-JSFEGE/article/:id"
          element={
            <DisplayArticle
              articles={articles}
              error={error}
              loading={loading}
            ></DisplayArticle>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
