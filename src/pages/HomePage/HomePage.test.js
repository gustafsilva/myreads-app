import React from 'react';
import { mount } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import Book from 'components/Book';
import HomePage from './index';

describe('[page] HomePage', () => {
  const setup = {
    updateBook: jest.fn(),
    myBooks: [
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
    ],
  };

  it('rendering my books empty', () => {
    const myBooks = [];
    const lengthBooksExpected = myBooks.length;

    const wrapper = mount((
      <MemoryRouter>
        <HomePage {...setup} myBooks={myBooks} />
      </MemoryRouter>
    ));
    const books = wrapper.find(Book);

    expect(books).toHaveLength(lengthBooksExpected);
  });

  it('rendering my books empty and check button to search', () => {
    const myBooks = [];
    const toExpected = '/search';

    const wrapper = mount((
      <MemoryRouter>
        <HomePage {...setup} myBooks={myBooks} />
      </MemoryRouter>
    ));

    const { to } = wrapper.find(Link).props();
    expect(to).toBe(toExpected);
  });

  it('rendering my books not empty', () => {
    const lengthBooksExpected = setup.myBooks.length;

    const wrapper = mount((
      <MemoryRouter>
        <HomePage {...setup} />
      </MemoryRouter>
    ));
    const books = wrapper.find(Book);

    expect(books).toHaveLength(lengthBooksExpected);
  });

  it('move book for other list', () => {
    const wrapper = mount((
      <MemoryRouter>
        <HomePage {...setup} />
      </MemoryRouter>
    ));
    const book = wrapper.find('Book select').first();
    const target = { value: 'currentlyRead' };
    book.simulate('change', { target });

    expect(setup.updateBook).toHaveBeenCalled();
  });
});
