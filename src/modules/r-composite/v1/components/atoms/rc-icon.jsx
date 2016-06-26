import React from 'react';
import classNames from 'classnames';
import 'material-design-lite';
import 'material-design-lite/material.css';
import './rc-icon.css';
const { componentHandler } = global;

class RCIcon extends React.Component {
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
    } = this.props;

    const elClassName = classNames(
      'material-icons',
      className
    );

    const ref = (c) => {
      this.element = c;
    };

    const attributes = {
      id,
      className: elClassName,
      style,
      ref,
    };

    return (
      <i {...attributes}>{icon}</i>
    );
  }
}

RCIcon.propTypes = {
  id: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  icon: React.PropTypes.string.isRequired,
};

export { RCIcon };
