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
  const LIST_BOOKS = [
    {
      title: 'The Linux Command Line',
      authors: [
        'William E. Shotts, Jr.',
      ],
      imageLinks: {
        smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      id: 'nggnmAEACAAJ',
      shelf: 'read',
    },
    {
      title: 'The Sebastian Thrun Handbook - Everything You Need to Know about Sebastian Thrun',
      authors: [
        'Andre Cantrell',
      ],
      imageLinks: {
        smallThumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      id: 'NqkKvgAACAAJ',
      shelf: 'wantToRead',
    },
    {
      title: 'Travel by Design',
      authors: [
        'Marlon G. Boarnet',
        'Randall Crane',
      ],
      imageLinks: {
        smallThumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      },
      id: 'f7EtoDfL6yYC',
      shelf: 'currentlyReading',
    },
  ];

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

    it('check books rendering', () => {
      const lengthBooksExpected = 3;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.homePage]}>
          <App />
        </MemoryRouter>
      ));
      const appComponent = wrapper.find(App).instance();
      appComponent.setState({ myBooks: LIST_BOOKS });
      wrapper.update();
      const booksSearch = wrapper.find(Book);

      expect(booksSearch).toHaveLength(lengthBooksExpected);
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

    it('check books rendering', () => {
      const lengthBooksExpected = 3;

      const wrapper = mount((
        <MemoryRouter initialEntries={[PATHS.searchPage]}>
          <App />
        </MemoryRouter>
      ));
      const appComponent = wrapper.find(App).instance();
      appComponent.setState({ booksSearch: LIST_BOOKS });
      wrapper.update();
      const booksSearch = wrapper.find(Book);

      expect(booksSearch).toHaveLength(lengthBooksExpected);
    });
  });
});
