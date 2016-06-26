import React from 'react';
import classNames from 'classnames';
import 'material-design-lite';
import { checkClassName, checkElementType, getClassName, getChildren } from './../../libs';
const { componentHandler } = global;

class RCCard extends React.Component {
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
      styleMixins = {},
      children,
      elavation = 1,
      heading,
      image,
      actionBorder = false,
      // fadeImage,
      // preloadImage,
    } = this.props;

    const elClassName = classNames(
      'mdl-card',
      {
        'mdl-shadow--2dp': elavation === 1,
        'mdl-shadow--3dp': elavation === 2,
        'mdl-shadow--4dp': elavation === 3,
        'mdl-shadow--6dp': elavation === 4,
        'mdl-shadow--8dp': elavation === 5,
        'mdl-shadow--16dp': elavation === 6,
      },
      'rc-card',
      className
    );

    const attributes = {
      id,
      className: elClassName,
      style
    };

    const headerStyle = styleMixins['.card-header'];
    const headerTitleStyle = styleMixins['.card-header-text'];
    const headerImageStyle = styleMixins['.card-header-image'];
    const headerImageTextStyle = styleMixins['.card-header-image-text'];
    const contentStyle = styleMixins['.card-content'];
    const actionStyle = styleMixins['.card-actions'];
    const menuStyle = styleMixins['.card-menu'];

    const renderHeader = () => {
      const headerClassName = classNames(
        'mdl-card__title',
        {
          'mdl-card--expand': image,
        },
        'rc-card-heading'
      );

      const headerAttributes = {
        className: headerClassName,
        style: Object.assign({},
          image ? { height: 150 } : null,
          image ? { backgroundImage: `url('${image}')` } : null,
          headerStyle,
          image ? headerImageStyle : null
        ),
      };

      const imageTextAttributes = {
        className: image ?
          'mdl-card__title-text rc-card-image-text' :
          'mdl-card__title-text rc-card-title',
        style: image ? headerImageTextStyle : headerTitleStyle,
      };

      return heading || image ? (
        <div {...headerAttributes} >
          <h4 {...imageTextAttributes} >
            {heading}
          </h4>
        </div>
      ) : null;
    };

    const renderChild = (child) => {
      if (typeof child === 'string') {
        return child;
      } else if (checkElementType(child, 'div') && checkClassName(child, 'card-content')) {
        const contentClassName = classNames(
          'mdl-card__supporting-text',
          'rc-card-content',
          getClassName(child)
        );

        const contentAttributes = {
          className: contentClassName,
          style: contentStyle,
        };

        return (
          <div {...contentAttributes} >
            {getChildren(child)}
          </div>
        );
      } else if (checkElementType(child, 'div') && checkClassName(child, 'card-actions')) {
        const actionClassName = classNames(
          'mdl-card__actions',
          {
            'mdl-card--border': actionBorder,
          },
          'rc-card-actions',
          getClassName(child)
        );

        const actionAttributes = {
          className: actionClassName,
          style: actionStyle,
        };

        return (
          <div {...actionAttributes} >
            {getChildren(child)}
          </div>
        );
      } else if (checkElementType(child, 'div') && checkClassName(child, 'card-menu')) {
        const menuClassName = classNames(
          'mdl-card__menu',
          'rc-card-menu',
          getClassName(child)
        );

        const menuAttributes = {
          className: menuClassName,
          style: menuStyle,
        };

        return (
          <div {...menuAttributes} >
            {getChildren(child)}
          </div>
        );
      }
      return (
        React.cloneElement(child, {}, React.Children.map(getChildren(child), renderChild))
      );
    };

    return (
      <div {...attributes} >
        {renderHeader()}
        {React.Children.map(children, renderChild)}
      </div>
    );
  }
}

RCCard.propTypes = {
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
  elavation: React.PropTypes.number,
  heading: React.PropTypes.string,
  image: React.PropTypes.string,
  actionBorder: React.PropTypes.bool,
};

export { RCCard };
