import React from 'react';
import classNames from 'classnames';
import 'material-design-lite';
const { componentHandler } = global;

class RCButton extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.componentMDLUpdate();
  }
  componentDidUpdate() {
    this.componentMDLUpdate();
  }
  onClick(e) {
    const {
      onClick = () => {},
      dialogConfirm,
      dialogDismiss,
    } = this.props;
    onClick({
      dialogConfirm,
      dialogDismiss,
    }, e);
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
      children,
      badgeLabel,
      disabled = false,
      noink = false,
      raised = false,
      colored,
      href,
      target,
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
      'mdl-button mdl-js-button',
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
      onClick: this.onClick,
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
  dialogConfirm: React.PropTypes.bool,
  dialogDismiss: React.PropTypes.bool,
};

export { RCButton };
