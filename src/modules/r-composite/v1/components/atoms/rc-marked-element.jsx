import React from 'react';
import classNames from 'classnames';
import marked from 'marked';
import { checkClassName } from './../../libs';
import highlightjs from 'highlight.js';

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
      highlight: (code, lang) => (`<code class="hljs">${highlightjs.highlightAuto(code, [
        'javascript',
        'html',
        'xml',
        'jsx',
        lang,
      ]).value}</code>`),
    });

    const [divText, scriptText] = children && React.Children.count(children) > 1 ?
      children : [children];

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
    } else if (markdown && typeof markdown === 'string') {
      text = markdown;
    }

    const dangerouslySetInnerHTML = {
      __html: marked(text, { renderer: useRenderer ? renderer : null }),
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
      'rc-marked-element',
      className
    );

    const divClassName = classNames(
      'markdown-html',
      className
    );

    let attributes = {
      id,
      className: elClassName,
    };

    let divAttributes = {
      className: divClassName,
    };

    const checkIfDivExists = () => {
      return divText &&
      typeof divText === 'object' &&
      divText.type === 'div' &&
      checkClassName(divText, 'markdown-html');
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

RCMarkedElement.propTypes = {
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
  markdown: React.PropTypes.string,
  breaks: React.PropTypes.bool,
  gfm: React.PropTypes.bool,
  pedantic: React.PropTypes.bool,
  smartLists: React.PropTypes.bool,
  smartypants: React.PropTypes.bool,
  tables: React.PropTypes.bool,
  useRenderer: React.PropTypes.bool,
};

export { RCMarkedElement };
