import React from 'react';
import { shallow } from 'enzyme';

import Book from './index';

describe('[component] Book', () => {
  const setup = {
    data: {
      imageLinks: {
        smallThunbmail: 'small/image.jpg',
        thunbmail: 'thumb/image.jpg',
      },
      authors: ['Gustavo Silva', 'Guilherme Freitas'],
    },
    updateBook: jest.fn(),
  };

  it('rendering with title empty', () => {
    const props = setup;
    props.data.title = '';

    const wrapper = shallow(<Book {...props} />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('rendering with title not empty', () => {
    const props = setup;
    props.data.title = 'React';
    const titleExpected = props.data.title;


    const wrapper = shallow(<Book {...props} />);
    const title = wrapper.find('.book-title');

    expect(title.text()).toBe(titleExpected);
  });
});
