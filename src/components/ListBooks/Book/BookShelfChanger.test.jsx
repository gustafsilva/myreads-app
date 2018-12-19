import React from 'react';
import { shallow } from 'enzyme';

import BookShelfChanges from './BookShelfChanger';

describe('[component] BookShelfChanges', () => {
  const setup = {
    update: jest.fn(),
  };
  const DEFAULT_SHELF = 'none';

  it('rendering with currentShelf undefined', () => {
    const currentShelfExpected = DEFAULT_SHELF;

    const wrapper = shallow(<BookShelfChanges {...setup} />);
    const { value } = wrapper.find('select').props();

    expect(value).toBe(currentShelfExpected);
  });

  it('rendering with currentShelf empty', () => {
    const currentShelfExpected = DEFAULT_SHELF;

    const wrapper = shallow(<BookShelfChanges {...setup} currentShelf="" />);
    const { value } = wrapper.find('select').props();

    expect(value).toBe(currentShelfExpected);
  });

  it('rendering with currentShelf read', () => {
    const currentShelfExpected = 'read';

    const wrapper = shallow(<BookShelfChanges {...setup} currentShelf="read" />);
    const { value } = wrapper.find('select').props();

    expect(value).toBe(currentShelfExpected);
  });

  it('rendering with currentShelf not exist', () => {
    const currentShelfExpected = DEFAULT_SHELF;

    const wrapper = shallow(<BookShelfChanges {...setup} currentShelf="aaa" />);
    const { value } = wrapper.find('select').props();

    expect(value).toBe(currentShelfExpected);
  });

  it('rendering with currentShelf and call update change shelf for read', () => {
    const wrapper = shallow(<BookShelfChanges {...setup} currentShelf="read" />);
    const shelf = wrapper.find('select');
    const target = { value: 'none' };
    shelf.simulate('change', { target });

    expect(setup.update).toHaveBeenCalled();
  });
});
