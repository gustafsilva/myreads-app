import React from 'react';
import { shallow, mount } from 'enzyme';

import Book from './index';
import BookAuthors from './BookAuthors';
import BookImage from './BookImage';
import BookshelvesChange from './BookshelvesChange';

describe('[component] Book', () => {
  const setup = {
    id: 'ycTADgAAQBAJ',
    title: 'Learning React',
    updateBook: jest.fn(),
  };

  it('checking book title', () => {
    const titleExpected = setup.title;

    const wrapper = shallow(<Book {...setup} />);
    const bookTitle = wrapper.find('.book-title');

    expect(bookTitle.text()).toBe(titleExpected);
  });

  it('checking book authors', () => {
    const authors = [
      'Alex Banks',
      'Eve Porcello',
    ];
    const authorsExpected = 'Alex Banks and Eve Porcello';

    const wrapper = mount(<Book authors={authors} {...setup} />);
    const bookAuthors = wrapper.find(BookAuthors);

    expect(bookAuthors.text()).toBe(authorsExpected);
  });

  it('checking thumbnail undefined', () => {
    const backgroundImageExpected = '';

    const wrapper = mount(<Book {...setup} />);
    const image = wrapper.find(BookImage);
    const { thumbnail } = image.props();

    expect(thumbnail).toBe(backgroundImageExpected);
  });

  it('checking thumbnail', () => {
    const props = setup;
    props.thumbnail = 'small/image.jpg';
    const backgroundImageExpected = props.thumbnail;

    const wrapper = mount(<Book {...props} />);
    const image = wrapper.find(BookImage);
    const { thumbnail } = image.props();

    expect(thumbnail).toBe(backgroundImageExpected);
  });

  it('checking shelf undefined', () => {
    const shelfExpected = 'none';

    const wrapper = mount(<Book {...setup} />);
    const bookshelves = wrapper.find(BookshelvesChange);
    const { currentShelf } = bookshelves.props();

    expect(currentShelf).toBe(shelfExpected);
  });

  it('checking shelf', () => {
    const props = setup;
    props.shelf = 'read';
    const shelfExpected = props.shelf;

    const wrapper = mount(<Book {...props} />);
    const bookshelves = wrapper.find(BookshelvesChange);
    const { currentShelf } = bookshelves.props();

    expect(currentShelf).toBe(shelfExpected);
  });

  it('change book shelf', () => {
    const wrapper = mount(<Book {...setup} />);
    const bookshelvesChange = wrapper.find(BookshelvesChange);

    const shelf = bookshelvesChange.find('select');
    const target = { value: 'read' };
    shelf.simulate('change', { target });

    expect(setup.updateBook).toHaveBeenCalled();
  });
});
