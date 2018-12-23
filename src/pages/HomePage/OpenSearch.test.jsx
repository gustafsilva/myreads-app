import React from 'react';
import { mount } from 'enzyme';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import OpenSearch from './OpenSearch';

describe('[component] OpenSearch', () => {
  it('check link /search', () => {
    const toExpected = '/search';
    const wrapper = mount((
      <MemoryRouter>
        <OpenSearch />
      </MemoryRouter>
    ));
    const { to } = wrapper.find(Link).props();

    expect(to).toBe(toExpected);
  });
});
