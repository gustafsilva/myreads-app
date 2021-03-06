import React from 'react';
import { shallow, mount } from 'enzyme';

import Book from 'components/Book';
import Bookshelf from './index';

describe('[component] Bookshelf', () => {
  const setup = {
    books: [
      {
        title: 'The Linux Command Line',
        authors: [
          'William E. Shotts, Jr.',
        ],
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
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
        },
        id: 'NqkKvgAACAAJ',
        shelf: 'read',
      },
      {
        title: 'Travel by Design',
        authors: [
          'Marlon G. Boarnet',
          'Randall Crane',
        ],
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        },
        id: 'f7EtoDfL6yYC',
        shelf: 'read',
      },
    ],
    updateBook: jest.fn(),
  };

  it('rendering with name list empty', () => {
    const wrapper = shallow(<Bookshelf name="" {...setup} />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('rendering with name list not empty', () => {
    const nameExpected = 'Read';

    const wrapper = shallow(<Bookshelf name="Read" {...setup} />);
    const name = wrapper.find('h2');

    expect(name.text()).toBe(nameExpected);
  });

  it('rendering with name list not empty and verify length books list', () => {
    const lengthBooksExpected = setup.books.length;

    const wrapper = mount(<Bookshelf name="Read" {...setup} />);
    const listBooks = wrapper.find(Book);

    expect(listBooks).toHaveLength(lengthBooksExpected);
  });

  it('renderung with name list not empty and verify length list empty books', () => {
    const books = [
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
    ];
    const lengthBooksExpected = books.length;

    const wrapper = mount(<Bookshelf name="Read" {...setup} books={books} />);
    const listBooks = wrapper.find(Book);

    expect(listBooks).toHaveLength(lengthBooksExpected);
  });
});
