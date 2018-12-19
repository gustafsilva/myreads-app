import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import SearchPage from './index';
import Book from '../ListBooks/Book';

describe('[component] SearchPage', () => {
  const setup = {
    query: '',
    books: [
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
        shelf: 'none',
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
        shelf: 'none',
      },
    ],
    updateBook: jest.fn(),
    updateQuery: jest.fn(),
  };

  it('rendering with books list empty', () => {
    const books = [];
    const lengthBooksExpected = books.length;

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} books={books} />
      </MemoryRouter>
    ));
    const currentBooks = wrapper.find(Book);

    expect(currentBooks).toHaveLength(lengthBooksExpected);
  });

  it('rendering with books list not empty', () => {
    const lengthBooksExpected = setup.books.length;

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const currentBooks = wrapper.find(Book);

    expect(currentBooks).toHaveLength(lengthBooksExpected);
  });

  it('check update book', () => {
    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const book = wrapper.find('Book select').first();
    const target = { value: 'none' };
    book.simulate('change', { target });

    expect(setup.updateBook).toHaveBeenCalled();
  });

  it('check update query', () => {
    const ID_INPUT_SEARCH_BOOKS_BAR = '#searchBooksBar';

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const search = wrapper.find(`input${ID_INPUT_SEARCH_BOOKS_BAR}`);
    const target = { value: 'react' };
    search.simulate('change', { target });

    expect(setup.updateQuery).toHaveBeenCalled();
  });
});
