import React from 'react';
import { mount  } from 'enzyme';
import { RCMarkedElement } from '../index';
import { expect } from 'chai';
const { describe, it } = global;

describe('RCMarkedElement', () => {
  it('should render normal text', () => {
    const text = 'The Text';
    const wrapper = mount(<RCMarkedElement markdown={text} />);
    expect(wrapper.text().trim()).to.be.equal(text);
  });

  it('should render HTML', () => {
    const text = '### This is a header\n\nThis is the body';
    const html = '<div class="rc-marked-element"><h3 id="this-is-a-header">This is a header</h3>\n<p>This is the body</p>\n</div>';
    const wrapper = mount(<RCMarkedElement markdown={text} />);
    expect(wrapper.html().trim()).to.be.equal(html);
  });
});
