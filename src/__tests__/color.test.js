import React from 'react';
import { shallow } from 'enzyme';

import parser from '../';

describe('[color]', () => {
  it('should parse [color] to react', () => {
    const bbcode = '[color=red]red[/color]';
    const wrapper = shallow(<div>{parser.toReact(bbcode)}</div>).children().first();

    expect(wrapper.text()).toBe('red');
    expect(wrapper.prop('style').color).toBe('red');
  });
});
