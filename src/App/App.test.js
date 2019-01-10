import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { waitForState } from 'enzyme-async-helpers';

import App from 'App';
import Book from 'components/Book';

describe('[main] App', () => {
  const CONFIG_API_REQUEST = { timeout: 5000 };

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

  it('check books loading', async () => {
    const wrapper = mount((
      <MemoryRouter>
        <App />
      </MemoryRouter>
    ));
    const appWrapper = wrapper.find(App);

    await waitForState(appWrapper, state => state.loading === false, CONFIG_API_REQUEST);
    const { myBooks } = appWrapper.state();
    wrapper.update();

    const booksRendered = wrapper.find(Book);
    expect(booksRendered).toHaveLength(myBooks.length);
  });
});
