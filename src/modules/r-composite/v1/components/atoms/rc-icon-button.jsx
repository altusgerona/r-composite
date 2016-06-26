import React from 'react';
import classNames from 'classnames';
import { RCIcon } from './rc-icon.jsx';
import 'material-design-lite';
const { componentHandler } = global;

class RCIconButton extends React.Component {
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
  render() {
    const {
      id,
      className,
      style,
      icon,
      badgeLabel,
      disabled = false,
      noink = false,
      raised = false,
      colored,
      href,
      target,
      onClick,
      isAnchor = true,
      // ariaActiveAttribute,
      // callbackWhenActive,
      // elavation,
      // callbackWhenFocused,
      // keyBindings,
      // keyEventTarget,
      // callbackWhenPointerDown,
      // callbackWhenRaised,
      // callbackWhenReceivedFocusFromKeyboard,
      // stopKeyboardEventPropagation,
      // toggles,
    } = this.props;

    const elClassName = classNames(
      'mdl-button mdl-js-button mdl-button--icon',
      {
        'mdl-button--raised': raised,
        'mdl-js-ripple-effect': !noink,
        'mdl-badge': badgeLabel,
      },
      colored ? `mdl-button--${colored}` : null,
      'rc-button',
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
        <RCIcon icon={icon} />
      </a>
    ) : (
      <button {...attributes}>
        <RCIcon icon={icon} />
      </button>
    );
  }
}

RCIconButton.propTypes = {
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
  icon: React.PropTypes.string.isRequired,
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

export { RCIconButton };
