import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import SearchBooksBar from './SearchBooksBar';

describe('[component] SearchBooksBar', () => {
  const setup = { updateQuery: jest.fn() };

  it('rendering with query empty', () => {
    const query = '';
    const queryExpected = query;

    const wrapper = shallow(<SearchBooksBar {...setup} query={query} />);
    const { value } = wrapper.find('input').props();

    expect(value).toBe(queryExpected);
  });

  it('rendering with query not empty', () => {
    const query = 'react';
    const queryExpected = query;

    const wrapper = shallow(<SearchBooksBar {...setup} query={query} />);
    const { value } = wrapper.find('input').props();

    expect(value).toBe(queryExpected);
  });

  it('check update query', () => {
    const query = 'react';

    const wrapper = shallow(<SearchBooksBar {...setup} query={query} />);
    const target = { value: 'reac' };
    wrapper.find('input').simulate('change', { target });

    expect(setup.updateQuery).toHaveBeenCalled();
  });

  it('check click clear query', () => {
    const wrapper = mount((
      <MemoryRouter>
        <SearchBooksBar {...setup} query="react" />
      </MemoryRouter>
    ));
    const clearButton = wrapper.find('button');
    clearButton.simulate('click');

    expect(setup.updateQuery).toHaveBeenCalled();
  });
});
