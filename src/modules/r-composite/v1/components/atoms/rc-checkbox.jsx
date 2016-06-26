import React from 'react';
import classNames from 'classnames';
import 'material-design-lite';
import random from 'random-js';
import _ from 'underscore';
const { componentHandler } = global;

class RCCheckbox extends React.Component {
  constructor() {
    super();
    this.getElement = this.getElement.bind(this);
    this.getValue = this.getValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.componentMDLUpdate();
    this.setChecked();
  }
  componentDidUpdate() {
    this.componentMDLUpdate();
    this.setChecked();
  }
  setChecked() {
    const { checked } = this.props;

    if (checked) {
      this.checkValue(true);
    } else {
      this.checkValue(false);
    }
  }
  checkValue(value) {
    if (!this.element.MaterialCheckbox) {
      this.element.addEventListener('mdl-componentupgraded', () => {
        if (value) {
          this.element.MaterialCheckbox.check();
        } else {
          this.element.MaterialCheckbox.uncheck();
        }
      });
    } else if (value) {
      this.element.MaterialCheckbox.check();
    } else {
      this.element.MaterialCheckbox.uncheck();
    }

  }
  getElement() {
    return this.inputElement;
  }
  getValue() {
    return this.inputElement.value && this.inputElement.checked ?
      this.inputElement.value : this.inputElement.checked;
  }
  onChange(e) {
    const { onChange } = this.props;
    onChange(this.getValue(), e);
  }
  onClick(e) {
    const { onClick } = this.props;
    onClick(this.getValue(), e);
  }
  shouldComponentUpdate (nextProps) {
    for (var i in nextProps) {
      if (
        nextProps[i] &&
        typeof nextProps[i] !== 'function' &&
        this.props[i] &&
        typeof this.props[i] !== 'function' &&
        this.props[i] !== nextProps[i]
      ) {
        return true;
      }
    }
    for (var i in this.props) {
      if (
        nextProps[i] &&
        typeof nextProps[i] !== 'function' &&
        this.props[i] &&
        typeof this.props[i] !== 'function' &&
        this.props[i] !== nextProps[i]
      ) {
        return true;
      }
    }
    return false;
  }
  componentMDLUpdate() {
    if (this.element && componentHandler) {
      componentHandler.upgradeElement(this.element);
    }
  }
  render() {
    const r = random();
    const {
      id = `rc-checkbox=${r.string(10)}`,
      name,
      label,
      className,
      style,
      value,
      disabled = false,
    } = this.props;

    const elClassName = classNames(
      'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect',
      'rc-checkbox',
      className
    );

    const ref = (c) => {
      this.element = c;
    };

    const inputRef = (c) => {
      this.inputElement = c;
    };

    const attributes = {
      htmlFor: id,
      className: elClassName,
      style,
      ref,
    };

    const inputAttribtes = {
      className: 'mdl-checkbox__input rc-checkbox-input',
      id,
      name,
      disabled,
      ref: inputRef,
      type: 'checkbox',
      value,
      onChange: this.onChange,
      onClick: this.onClick,
    };

    return (
      <label {...attributes}>
        <input {...inputAttribtes} />
        <span className="mdl-checkbox__label">{label}</span>
      </label>
    );
  }
}

RCCheckbox.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  label: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func,
};

export { RCCheckbox };
