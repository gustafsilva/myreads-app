import React from 'react';
import { shallow } from 'enzyme';

import Loading from './index';

describe('[component] Loading', () => {
  const CHILDREN = <p>OK!</p>;

  it('rendering with loading status false', () => {
    const wrapper = shallow(<Loading status={false}>{CHILDREN}</Loading>);

    expect(wrapper.exists('p')).toBeTruthy();
  });

  it('rendering with loading status true', () => {
    const wrapper = shallow(<Loading status>{CHILDREN}</Loading>);

    expect(wrapper.exists('p')).toBeFalsy();
  });

  it('customizing icon className', () => {
    const className = 'loading center';

    const wrapper = shallow(<Loading className={className} status>{CHILDREN}</Loading>);

    expect(wrapper.find('.loading')).toHaveLength(1);
    expect(wrapper.find('.center')).toHaveLength(1);
  });
});
