import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('[component] Loading', () => {
  it('rendering with loading status false', () => {
    const children = <p>OK!</p>;

    const wrapper = shallow(<Loading status={false}>{children}</Loading>);

    expect(wrapper.exists('p')).toBeTruthy();
  });

  it('rendering with loading status true', () => {
    const children = <p>OK!</p>;

    const wrapper = shallow(<Loading status>{children}</Loading>);

    expect(wrapper.exists('p')).toBeFalsy();
  });
});
