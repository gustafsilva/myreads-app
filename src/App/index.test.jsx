import React from 'react';
import { shallow } from 'enzyme';
import { waitForState } from 'enzyme-async-helpers';

import App from 'App';

describe('[component] App', () => {
  // const PATHS = {
  //   homePage: '/',
  //   searchPage: '/search',
  // };
  const CONFIG_API_REQUEST = { timeout: 5000 };
  // const LIST_BOOKS = [
  //   {
  //     title: 'The Linux Command Line',
  //     authors: [
  //       'William E. Shotts, Jr.',
  //     ],
  //     imageLinks: {
  //       smallThumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //       thumbnail: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //     },
  //     id: 'nggnmAEACAAJ',
  //     shelf: 'read',
  //   },
  //   {
  //     title: 'The Sebastian Thrun Handbook - Everything You Need to Know about Sebastian Thrun',
  //     authors: [
  //       'Andre Cantrell',
  //     ],
  //     imageLinks: {
  //       smallThumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  //       thumbnail: 'http://books.google.com/books/content?id=NqkKvgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  //     },
  //     id: 'NqkKvgAACAAJ',
  //     shelf: 'wantToRead',
  //   },
  //   {
  //     title: 'Travel by Design',
  //     authors: [
  //       'Marlon G. Boarnet',
  //       'Randall Crane',
  //     ],
  //     imageLinks: {
  //       smallThumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
  //       thumbnail: 'http://books.google.com/books/content?id=f7EtoDfL6yYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  //     },
  //     id: 'f7EtoDfL6yYC',
  //     shelf: 'currentlyReading',
  //   },
  // ];

  it('check init state', () => {
    const initStateExptected = {
      myBooks: [],
      loading: true,
    };

    const wrapper = shallow(<App />);

    expect(wrapper.state()).toEqual(initStateExptected);
  });

  it('check loading state', async () => {
    const wrapper = shallow(<App />);
    await waitForState(wrapper, state => state.loading === false, CONFIG_API_REQUEST);

    const { loading } = wrapper.state();
    expect(loading).toBeFalsy();
  });
});
