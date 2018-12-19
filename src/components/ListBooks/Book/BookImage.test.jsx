import React from 'react';
import { shallow } from 'enzyme';

import BookImage from './BookImage';

describe('[component] BookImage', () => {
  it('rendering with undefined imageLinks', () => {
    const backgroundImageExpected = 'url("")';

    const wrapper = shallow(<BookImage />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });

  it('rendering with smallThumbnail not empty and thubnail empty', () => {
    const smallThumbnail = 'image.jpg';
    const thumbnail = '';
    const backgroundImageExpected = `url("${smallThumbnail}")`;
    const imageLinks = { smallThumbnail, thumbnail };

    const wrapper = shallow(<BookImage imageLinks={imageLinks} />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });

  it('rendering with smallThumbnail empty and thumbnail not empty', () => {
    const smallThumbnail = '';
    const thumbnail = 'image.jpg';
    const backgroundImageExpected = `url("${thumbnail}")`;
    const imageLinks = { smallThumbnail, thumbnail };

    const wrapper = shallow(<BookImage imageLinks={imageLinks} />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });

  it('rendering with smallThumbnail and thumbnail empty', () => {
    const smallThumbnail = '';
    const thumbnail = '';
    const backgroundImageExpected = 'url("")';
    const imageLinks = { smallThumbnail, thumbnail };

    const wrapper = shallow(<BookImage imageLinks={imageLinks} />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });

  it('rendering with smallThubnail and thumbnail not empty', () => {
    const smallThumbnail = 'imageSmall.jpg';
    const thumbnail = 'image.jpg';
    const backgroundImageExpected = `url("${smallThumbnail}")`;
    const imageLinks = { smallThumbnail, thumbnail };

    const wrapper = shallow(<BookImage imageLinks={imageLinks} />);
    const { backgroundImage } = wrapper.prop('style');

    expect(backgroundImage).toBe(backgroundImageExpected);
  });
});
