import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { waitForState } from 'enzyme-async-helpers';

import Book from 'components/ListBooks/Book';
import SearchPage from './index';

describe('[component] SearchPage', () => {
  const setup = {
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
  };

  const BOOKS = [
    {
      title: 'Astronomy',
      authors: [
        'Clay Farris Naff',
      ],
      publisher: 'Greenhaven Press, Incorporated',
      publishedDate: '2006-01',
      description: 'A collection of essays which present the history of astronomy, current theories about the origin of the universe, and controversies surrounding the Hubble telescope, a mission to Mars, and the existence of extraterrestrial life.',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '0737728159',
        },
        {
          type: 'ISBN_13',
          identifier: '9780737728156',
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 224,
      printType: 'BOOK',
      categories: [
        'Juvenile Nonfiction',
      ],
      averageRating: 2,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      imageLinks: {
        smallThumbnail: 'http://books.google.com/books/content?id=0gNAAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        thumbnail: 'http://books.google.com/books/content?id=0gNAAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
      },
      language: 'en',
      previewLink: 'http://books.google.com/books?id=0gNAAQAAIAAJ&q=astronomy&dq=astronomy&hl=&cd=1&source=gbs_api',
      infoLink: 'http://books.google.com/books?id=0gNAAQAAIAAJ&dq=astronomy&hl=&source=gbs_api',
      canonicalVolumeLink: 'https://books.google.com/books/about/Astronomy.html?hl=&id=0gNAAQAAIAAJ',
      id: '0gNAAQAAIAAJ',
      shelf: 'none',
    },
  ];

  it('check init state', () => {
    const initStateExpected = {
      query: '',
      books: [],
      loading: false,
    };

    const wrapper = shallow(<SearchPage {...setup} />);

    expect(wrapper.state()).toEqual(initStateExpected);
  });

  it('rendering with books list empty', () => {
    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));

    expect(wrapper.exists('Book')).toBeFalsy();
  });

  it('rendering with books list not empty', () => {
    const lengthBooksExpected = BOOKS.length;

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const searchPageComponent = wrapper.find(SearchPage).instance();
    searchPageComponent.setState({ books: BOOKS });
    wrapper.update();

    expect(wrapper.find(Book)).toHaveLength(lengthBooksExpected);
  });

  it('check update book', () => {
    const newShelf = 'read';

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const searchPageComponent = wrapper.find(SearchPage).instance();
    searchPageComponent.setState({ books: BOOKS });
    wrapper.update();

    const bookShelfSelect = wrapper.find('Book select').first();
    const target = { value: newShelf };
    bookShelfSelect.simulate('change', { target });

    expect(setup.updateBook).toHaveBeenCalled();
  });

  it('check clear query', () => {
    const lengthBooksExpected = 0;

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const searchPageComponent = wrapper.find(SearchPage);
    searchPageComponent.setState({ books: BOOKS });

    const clearButton = searchPageComponent.find('button');
    clearButton.simulate('click');
    expect(setup.updateBook).toHaveBeenCalled();

    const { books } = searchPageComponent.state();
    expect(books).toHaveLength(lengthBooksExpected);
  });

  it('check update query', async () => {
    const lengthMinBooksExpected = 0;
    const ID_INPUT_SEARCH_BOOKS_BAR = '#searchBooksBar';
    const newQuery = 'react';

    const wrapper = mount((
      <MemoryRouter>
        <SearchPage {...setup} />
      </MemoryRouter>
    ));
    const searchPageComponent = wrapper.find(SearchPage);

    const search = searchPageComponent.find(`input${ID_INPUT_SEARCH_BOOKS_BAR}`);
    const target = { value: newQuery };
    search.simulate('change', { target });

    await waitForState(searchPageComponent, state => state.loading !== true, { timeout: 5000 });
    const { books } = searchPageComponent.state();

    expect(books.length).toBeGreaterThan(lengthMinBooksExpected);
  });
});
