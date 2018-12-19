import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from './App';
import MyListsBooks from './components/HomePage/MyListsBooks';
import MyList from './components/HomePage/MyListsBooks/MyList';
import ListBooks from './components/ListBooks';
import Book from './components/ListBooks/Book';

describe('[component] App', () => {
  const PATHS = {
    homePage: '/',
    searchPage: '/search',
  };

  it('check init state', () => {
    const initStateExptected = {
      myBooks: [],
      booksSearch: [],
      query: '',
    };

    const wrapper = shallow(<App />);

    expect(wrapper.state()).toEqual(initStateExptected);
  });

  describe('HomePage', () => {
    it('check my lists books', () => {
      const lengthMyListsBooksExpected = 1;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.homePage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(MyListsBooks);

      expect(myListsBooks).toHaveLength(lengthMyListsBooksExpected);
    });

    it('check three my list', () => {
      const lengthMyListExpected = 3;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.homePage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(MyList);

      expect(myListsBooks).toHaveLength(lengthMyListExpected);
    });

    it('check three lists books', () => {
      const lengthListsBooksExpected = 3;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.homePage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(ListBooks);

      expect(myListsBooks).toHaveLength(lengthListsBooksExpected);
    });

    it('check empty books rendering init state', () => {
      const lengthBooksExpected = 0;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.homePage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(Book);

      expect(myListsBooks).toHaveLength(lengthBooksExpected);
    });
  });

  describe('SearchPage', () => {
    it('check lists books', () => {
      const lengthListsBooksExpected = 1;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.searchPage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(ListBooks);

      expect(myListsBooks).toHaveLength(lengthListsBooksExpected);
    });

    it('check empty books rendering init state', () => {
      const lengthBooksExpected = 0;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.searchPage]}>
          <App />
        </MemoryRouter>
      ));
      const myListsBooks = wrapper.find(Book);

      expect(myListsBooks).toHaveLength(lengthBooksExpected);
    });
  });
});
