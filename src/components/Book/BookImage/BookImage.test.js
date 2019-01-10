import React from 'react';
import { shallow } from 'enzyme';

import ImageBookDefault from 'images/book.jpg';
import BookImage from './index';


describe('[component] BookImage', () => {
  it('rendering with undefined thumbnail', () => {
    const backgroundImageExpected = `url("${ImageBookDefault}")`;

    const wrapper = shallow(<BookImage />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });

  it('rendering with smallThumbnail not empty and thubnail empty', () => {
    const thumbnail = 'http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api';
    const backgroundImageExpected = `url("${thumbnail}")`;

    const wrapper = shallow(<BookImage thumbnail={thumbnail} />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });
});
