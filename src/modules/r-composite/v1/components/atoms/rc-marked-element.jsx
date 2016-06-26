import React from 'react';
import classNames from 'classnames';
import marked from 'marked';

class RCMarkedElement extends React.Component {
  render() {
    const {
      id,
      className,
      style,
      children,
      markdown,
      breaks = false,
      gfm = true,
      pedantic = false,
      smartLists = true,
      smartypants = false,
      tables = true,
      useRenderer = true,
    } = this.props;

    const renderer = new marked.Renderer();

    marked.setOptions({
      renderer,
      gfm,
      tables,
      breaks,
      pedantic,
      smartLists,
      smartypants,
    });

    const [ divText, scriptText ] = children && React.Children.count(children) > 1 ?
      children : [ children ];

    let text = '';

    if (
      typeof scriptText === 'object' &&
      scriptText.props &&
      scriptText.props.children &&
      typeof scriptText.props.children === 'string' &&
      scriptText.type === 'script' &&
      scriptText.props.type === 'text/markdown'
    ) {
      text = scriptText.props.children;
    } else if (typeof scriptText === 'string') {
      text = scriptText;
    } else if (
      typeof divText === 'object' &&
      divText.props &&
      divText.props.children &&
      typeof divText.props.children === 'string' &&
      divText.type === 'script' &&
      divText.props.type === 'text/markdown'
    ) {
      text = divText.props.children;
    } else if (typeof divText === 'string') {
      text = divText;
    } else if (markdown && typeof markdown === 'string') {
      text = markdown;
    }

    const dangerouslySetInnerHTML = {
      __html: marked(text, { renderer: useRenderer ? renderer : null})
    };

    renderer.table = (header, body) => {
      return `
        <table class="mdl-data-table mdl-js-data-table">
          ${header}
          ${body}
        </table>
      `;
    };

    const elClassName = classNames(
      className
    );

    const divClassName = classNames(
      'markdown-html',
      className
    );

    let attributes = {
      id,
      className: elClassName
    };

    let divAttributes = {
      className: divClassName
    };

    const checkIfDivExists = () => {
      return divText &&
      typeof divText === 'object' &&
      divText.type === 'div' &&
      divText.props &&
      divText.props.className.split(' ').indexOf('markdown-html') >= 0;
    };

    if (!checkIfDivExists()) {
      attributes = {
        ...attributes,
        dangerouslySetInnerHTML,
        style,
      };
    } else {
       divAttributes = {
        ...divAttributes,
        dangerouslySetInnerHTML,
        style,
      };
    }

    return (
      <div {...attributes}>
        {
          checkIfDivExists() ? (
            <div {...divAttributes}>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export { RCMarkedElement };
