import React from 'react';
import { shallow } from 'enzyme';

import BookAuthors from './index';

describe('[component] BookAuthors', () => {
  it('rendering with list of authors undefined', () => {
    const wrapper = shallow(<BookAuthors />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('rendering with list of authors empty', () => {
    const authors = [];

    const wrapper = shallow(<BookAuthors authors={authors} />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it("rendering with an author's list", () => {
    const authors = ['Gustavo'];
    const authorsListExpected = 'Gustavo';

    const wrapper = shallow(<BookAuthors authors={authors} />);

    expect(wrapper.text()).toBe(authorsListExpected);
  });

  it("rendering with two author's list ", () => {
    const authors = ['Gustavo', 'Guilherme'];
    const authorsListExpected = 'Gustavo and Guilherme';

    const wrapper = shallow(<BookAuthors authors={authors} />);

    expect(wrapper.text()).toBe(authorsListExpected);
  });

  it("rendering with three author's list", () => {
    const authors = ['Gustavo', 'Guilherme', 'João'];
    const authorsListExpected = 'Gustavo, Guilherme and João';

    const wrapper = shallow(<BookAuthors authors={authors} />);

    expect(wrapper.text()).toBe(authorsListExpected);
  });
});
