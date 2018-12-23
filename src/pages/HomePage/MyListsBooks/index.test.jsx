import React from 'react';
import { mount } from 'enzyme';

import Book from 'components/ListBooks/Book';
import MyListsBooks from './index';

describe('[component] MyListsBooks', () => {
  const setup = { updateBook: jest.fn() };

  it('rendering with myBooks empty', () => {
    const myBooks = [];
    const lengthBooksExpected = 0;

    const wrapper = mount(<MyListsBooks {...setup} myBooks={myBooks} />);
    const books = wrapper.find(Book);

    expect(books).toHaveLength(lengthBooksExpected);
  });

  it('rendering with myBooks not empty', () => {
    const myBooks = [
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
    const lengthBooksExpected = myBooks.length;

    const wrapper = mount(<MyListsBooks {...setup} myBooks={myBooks} />);
    const books = wrapper.find(Book);

    expect(books).toHaveLength(lengthBooksExpected);
  });
});
