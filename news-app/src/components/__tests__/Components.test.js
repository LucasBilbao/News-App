/* eslint no-undef: 0 */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import articles from './assets/articleTest.json';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

// Import Components
import Article from '../Article';
import Search from '../Search';
import DisplayArticle from '../DisplayArticle';
import ArticleCard from '../ArticleCard';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('Test 5 components', () => {
  // Article Tests
  describe('Article Tests', () => {
    describe('1. Test Article with no filter or specified title', () => {
      const props = {
        articles: articles,
      };

      let component;

      const storage = mockStore({
        filters: {
          filters: [],
        },
        title: {
          title: '',
        },
      });

      beforeEach(() => {
        component = mount(
          <Router>
            <Provider store={storage}>
              s<Article {...props}></Article>
            </Provider>
          </Router>
        );
      });

      it('1. Match snapshot with the given articles', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is Truthy', () => {
        expect(component).toBeTruthy();
      });

      it('3. Check the title displayed', () => {
        const articleComponentTitle = component.find(
          '[data-test="article-title"]'
        );
        expect(articleComponentTitle.text()).toBe(articles[0].title);
      });

      it('4. Check the description displayed', () => {
        const articleComponentDescription = component.find(
          '[data-test="article-description"]'
        );
        expect(articleComponentDescription.text()).toBe(
          articles[0].description
        );
      });
    });

    describe('2. Test Articles  with specified filter and title and do not match', () => {
      const props = {
        articles: articles,
      };

      let component;

      const storage = mockStore({
        filters: {
          filters: ['CNN'],
        },
        title: {
          title: 'Covid-19',
        },
      });

      beforeEach(() => {
        component = mount(
          <Router>
            <Provider store={storage}>
              <Article {...props}></Article>
            </Provider>
          </Router>
        );
      });
      it('1. Match snapshot with the given articles', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is Truthy', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('3. Test Articles  with specified filter and title and matches', () => {
      const props = {
        articles: articles,
      };

      let component;

      const storage = mockStore({
        filters: {
          filters: ['The Verge'],
        },
        title: {
          title: articles[0].title,
        },
      });

      beforeEach(() => {
        component = mount(
          <Router>
            <Provider store={storage}>
              <Article {...props}></Article>
            </Provider>
          </Router>
        );
      });
      it('1. Match snapshot with the given articles', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is Truthy', () => {
        expect(component).toBeTruthy();
      });

      it('3. Check the title displayed', () => {
        const articleComponentTitle = component.find(
          '[data-test="article-title"]'
        );
        expect(articleComponentTitle.text()).toBe(articles[0].title);
      });

      it('4. Check the description displayed', () => {
        const articleComponentDescription = component.find(
          '[data-test="article-description"]'
        );
        expect(articleComponentDescription.text()).toBe(
          articles[0].description
        );
      });
    });

    describe('4. Test Articles with specified filter and title, only filter matches', () => {
      const props = {
        articles: articles,
      };

      let component;

      const storage = mockStore({
        filters: {
          filters: ['The Verge'],
        },
        title: {
          title: 'vdsjvvsd',
        },
      });

      beforeEach(() => {
        component = mount(
          <Router>
            <Provider store={storage}>
              <Article {...props}></Article>
            </Provider>
          </Router>
        );
      });
      it('1. Match snapshot with the given articles', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is Truthy', () => {
        expect(component).toBeTruthy();
      });
    });
  });

  // Search Tests
  describe('Search Tests', () => {
    describe('1. Test Search components', () => {
      const storage = mockStore({
        title: {
          title: '',
        },
      });

      let component;

      beforeEach(() => {
        component = mount(
          <Provider store={storage}>
            <Search></Search>
          </Provider>
        );
      });

      it('1. Check Search button content', () => {
        const searchBtn = component.find('[data-test="form-button"]');
        expect(searchBtn.text()).toBe('Search');
      });

      it('2. Check the input is editable', () => {
        const input = component.find('[data-test="form-input"]');
        input.instance().value = 'Changed';
        expect(input.instance().value).toBe('Changed');
      });

      it('2. Check submission', () => {
        const input = component.find('[data-test="form-input"]');
        input.instance().value = 'Changed';

        const searchBtn = component.find('[data-test="search-form"]');
        searchBtn.simulate('submit');

        expect(input.instance().value).toBe('');
      });

      it('3. Check that form submits without changing empty input', () => {
        const input = component.find('[data-test="form-input"]');

        const searchBtn = component.find('[data-test="search-form"]');
        searchBtn.simulate('submit');

        expect(input.instance().value).toBe('');
      });
    });
  });

  // DisplayArticle Tests
  describe('DisplayArticle Tests', () => {
    describe('1. Check loading', () => {
      const props = {
        articles: [],
        loading: true,
        error: null,
      };

      let component;

      beforeEach(() => {
        component = mount(
          <Router>
            <DisplayArticle {...props}></DisplayArticle>
          </Router>
        );
      });

      it('1. Match snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('2. Check error', () => {
      const props = {
        articles: [],
        loading: false,
        error: 'An Error has ocurred',
      };

      let component;

      beforeEach(() => {
        component = mount(
          <Router>
            <DisplayArticle {...props}></DisplayArticle>
          </Router>
        );
      });

      it('1. Match snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('2. Test Displayed title and content of the Article ', () => {
      const props = {
        articles: articles,
        loading: false,
        error: null,
      };

      let component;

      const id = encodeURI(articles[0].title);

      beforeEach(() => {
        component = mount(
          <Router>
            <DisplayArticle
              {...props}
              match={{ params: { id: id } }}
            ></DisplayArticle>
          </Router>
        );
      });

      it('1. Match snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });
    });
  });

  // Article Card Tests
  describe('Article Card Tests', () => {
    describe('1. Check loading', () => {
      const props = {
        articles: articles,
        loading: false,
        error: null,
      };

      const storage = mockStore({
        filters: {
          filters: [],
        },
        title: {
          title: '',
        },
      });

      let component;

      beforeEach(() => {
        component = mount(
          <Provider store={storage}>
            <Router>
              <ArticleCard {...props}></ArticleCard>
            </Router>
          </Provider>
        );
      });

      it('1. Match Snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('2. Check loading', () => {
      const props = {
        articles: articles,
        loading: true,
        error: null,
      };

      const storage = mockStore({
        filters: {
          filters: [],
        },
        title: {
          title: '',
        },
      });

      let component;

      beforeEach(() => {
        component = mount(
          <Provider store={storage}>
            <Router>
              <ArticleCard {...props}></ArticleCard>
            </Router>
          </Provider>
        );
      });

      it('1. Match Snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('3. Check error', () => {
      const props = {
        articles: articles,
        loading: false,
        error: 'An Error has ocurred',
      };

      const storage = mockStore({
        filters: {
          filters: [],
        },
        title: {
          title: '',
        },
      });

      let component;

      beforeEach(() => {
        component = mount(
          <Provider store={storage}>
            <Router>
              <ArticleCard {...props}></ArticleCard>
            </Router>
          </Provider>
        );
      });
      it('1. Match Snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });

      it('3. check error message', () => {
        const errMsg = component.find('[data-test="error"]');
        expect(errMsg.text()).toBe(props.error);
      });
    });

    describe('4. Check when filter and title are specified', () => {
      const props = {
        articles: articles,
        loading: false,
        error: null,
      };

      const storage = mockStore({
        filters: {
          filters: ['CNN', 'BBC News'],
        },
        title: {
          title: 'COVID-19',
        },
      });

      let component;

      beforeEach(() => {
        component = mount(
          <Provider store={storage}>
            <Router>
              <ArticleCard {...props}></ArticleCard>
            </Router>
          </Provider>
        );
      });

      it('1. Match Snapshot', () => {
        expect(component).toMatchSnapshot();
      });

      it('2. Check if component is truthy', () => {
        expect(component).toBeTruthy();
      });

      it('3. Check searched titles displayed', () => {
        const titleSearched = component.find('[data-test="searched-title"]');
        const wantedOutcome = `Titles: ${storage.getState().title.title}`;
        expect(titleSearched.text()).toBe(wantedOutcome);
      });

      it('4. Check searched sources displayed', () => {
        const sourcesSearched = component.find(
          '[data-test="searched-sources"]'
        );
        const wantedOutcome = `Sources: ${storage
          .getState()
          .filters.filters.join(',')}`;
        expect(sourcesSearched.text()).toBe(wantedOutcome);
      });
    });
  });

  // Header Tests
  describe('Header Tests', () => {
    describe('1. Test Header title and subtitle', () => {
      let component;

      beforeEach(() => {
        component = mount(<Header></Header>);
      });

      it('1. Test title', () => {
        const title = component.find('[data-test="header-title"]');
        expect(title.text()).toBe('PewNews');
      });

      it('1. Test subtitle', () => {
        const title = component.find('[data-test="header-subtitle"]');
        expect(title.text()).toBe('NEWS');
      });
    });
  });
});
