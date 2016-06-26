import React from 'react';
import { shallow, mount } from 'enzyme';
import { RCButton } from '../index';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

describe('RCButton', () => {
  it('should show the given text', () => {
    const text = 'The Text';
    const wrapper = shallow(<RCButton>{text}</RCButton>);
    expect(wrapper.text()).to.be.equal(text);
  });

  it('should handle the click event', () => {
    const clickMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <RCButton onClick={ clickMe }>ClickMe</RCButton>
      </div>
    );

    wrapper.find('RCButton').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });
});

