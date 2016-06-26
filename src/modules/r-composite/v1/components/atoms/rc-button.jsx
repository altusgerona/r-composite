import React from 'react';
import classNames from 'classnames';
import 'material-design-lite';
import 'material-design-lite/material.css';
const { componentHandler } = global;

class RCButton extends React.Component {
  constructor() {
    super();
    this.checkPointerDown = this.checkPointerDown.bind(this);
  }
  componentDidMount() {
    this.componentMDLUpdate();
  }
  componentDidUpdate() {
    this.componentMDLUpdate();
  }
  componentMDLUpdate() {
    if (this.element && componentHandler) {
      componentHandler.upgradeElement(this.element);
    }
  }
  checkPointerDown() {

  }
  render() {
    const {
      id,
      className,
      style,
      children,
      badgeLabel,
      // ariaActiveAttribute,
      // callbackWhenActive,
      disabled = false,
      // elavation,
      // callbackWhenFocused,
      // keyBindings,
      // keyEventTarget,
      noink = false,
      // callbackWhenPointerDown,
      // callbackWhenRaised,
      raised = false,
      // callbackWhenReceivedFocusFromKeyboard,
      // stopKeyboardEventPropagation,
      // toggles,
      colored,
      href,
      target,
      onClick,
      isAnchor = true,
    } = this.props;

    const elClassName = classNames(
      'mdl-button mdl-js-button',
      {
        'mdl-button--raised': raised,
        'mdl-js-ripple-effect': !noink,
        'mdl-badge': badgeLabel,
      },
      colored ? `mdl-button--${colored}` : null,
      className
    );

    const ref = (c) => {
      this.element = c;
    };

    const attributes = {
      id,
      className: elClassName,
      style,
      onClick,
      disabled,
      href,
      target,
      ref,
    };

    if (badgeLabel) {
      attributes.dataBadge = badgeLabel;
    }

    return isAnchor ? (
      <a {...attributes} >
        {children}
      </a>
    ) : (
      <button {...attributes}>
        {children}
      </button>
    );
  }
}

RCButton.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.arrayOf(
      React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
      ])
    ),
  ]),
  colored: React.PropTypes.oneOf([
    'colored',
    'primary',
    'accent',
  ]),
  disabled: React.PropTypes.bool,
  href: React.PropTypes.string,
  target: React.PropTypes.string,
  onClick: React.PropTypes.func,
  isAnchor: React.PropTypes.bool,
  noink: React.PropTypes.bool,
  raised: React.PropTypes.bool,
  badgeLabel: React.PropTypes.string,
};

export { RCButton };
