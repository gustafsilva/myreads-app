import React from 'react';
import { shallow } from 'enzyme';

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
});
