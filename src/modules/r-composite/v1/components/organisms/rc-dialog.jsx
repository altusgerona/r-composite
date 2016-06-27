import React from 'react';
import classNames from 'classnames';
import { getChildren } from './../../libs';

class RCDialog extends React.Component {
  constructor() {
    super();
    this.cancel = this.cancel.bind(this);
    this.center = this.center.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.closeAnywhere = this.closeAnywhere.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }
  cancel(e) {
    if (this.close()) {
      const { callbackWhenCanceled = () => {} } = this.props;
      callbackWhenCanceled(e);
    }
  }
  center() {
    // Centers horizontally and vertically if not already positioned.
    // This also sets position:fixed.
  }
  closeAnywhere(e) {
    const { modal = false, noCancelOnOutsideClick = false } = this.props;
    if (
      this.element &&
      e.target === this.element &&
      !modal &&
      !noCancelOnOutsideClick
    ) {
      return this.cancel(e);
    }
    return false;
  }
  close() {
    if (this.element) {
      this.element.style.display = 'none';
      return true;
    }
    return false;
  }
  open() {
    if (this.element) {
      const { callbackWhenOpened = () => {} } = this.props;
      this.element.style.display = 'block';
      callbackWhenOpened();
      return true;
    }
    return false;
  }
  isOpen() {
    return this.element && this.element.style.display === 'block';
  }
  isClosed() {
    return this.element && this.element.style.display === 'none';
  }
  toggle() {
    if (this.element) {
      if (this.isOpen()) {
        return this.close();
      } else if (this.isClosed()) {
        return this.open();
      }
    }
    return false;
  }
  buttonOnClick({ dialogConfirm, dialogDismiss }) {
    if (dialogConfirm) {
      this.close();
    } else if (dialogDismiss) {
      this.cancel();
    }
  }
  // refit() {}
  // resetFit() {}
  // resizerShouldNotify() {}
  // stopResizeNotificationFor() {}
  // position() {}
  // notifyResize() {}
  // constrain() {}
  // fit() {}
  // getClosingReason() {}
  render() {
    const {
      id,
      className,
      style,
      children,
      modal = false,
      role = 'dialog',
      // noCancelOnEscKey = false,
      zIndex = 1,
      width,
      // alwaysOnTop,
      // autoFitOnAttach,
      // backdropElement,
      // dynamicAlign,
      // entryAnimation,
      // exitAnimation,
      // fitInto,
      // horizontalAlign,
      // horizontalOffset,
      // noAutoFocus,
      // noOverlap,
      // positionTarget,
      // restoreFocusOnClose,
      // sizingTarget,
      // verticalAlign,
      // verticalOffset,
      // withBackdrop,
    } = this.props;

    const dialogBackgroundStyle = {
      display: 'none', /* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex, /* Sit on top */
      left: 0,
      top: 0,
      width: '100%', /* Full width */
      height: '100%', /* Full height */
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: modal ? 'rgba(0,0,0,0.4)' : null, /* Fallback color */
    };

    const dialogStyle = {
      backgroundColor: '#fefefe',
      margin: '15% auto', /* 15% from the top and centered */
      padding: '20px',
      maxHeight: '90%',
      overflow: 'auto',
      width,
      maxWidth: '90%',
    };

    const ref = (c) => {
      this.element = c;
    };

    const dialogBackgroundClassName = classNames(
      'rc-dialog-background'
    );

    const dialogClassName = classNames(
      'rc-dialog',
      'mdl-shadow--4dp',
      className
    );

    const attributes = {
      id,
      className: dialogBackgroundClassName,
      style: dialogBackgroundStyle,
      ref,
      onClick: this.closeAnywhere,
    };

    const dialogAttributes = {
      className: dialogClassName,
      role,
      ariaModal: modal,
      style: Object.assign({}, style, dialogStyle),
    };

    const renderChild = (child) => {
      if (typeof child === 'string') {
        return child;
      } else if (typeof child === 'object') {
        return (
          React.cloneElement(
            child,
            {
              onClick: child.props &&
                child.props.onClick ?
                child.props.onClick :
                this.buttonOnClick,
            },
            React.Children.map(getChildren(child), renderChild)
          )
        );
      }
      return null;
    };

    return (
      <div {...attributes} >
        <div {...dialogAttributes} >
          { React.Children.map(children, renderChild) }
        </div>
      </div>
    );
  }
}

RCDialog.propTypes = {
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
  callbackWhenCanceled: React.PropTypes.func,
  modal: React.PropTypes.bool,
  noCancelOnOutsideClick: React.PropTypes.bool,
  callbackWhenOpened: React.PropTypes.func,
  zIndex: React.PropTypes.number,
  role: React.PropTypes.string,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export { RCDialog };
