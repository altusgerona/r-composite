import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCMarkedElement } from '../index';

storiesOf('RCMarkedElement', module)
  .add('Basic usage: adding a markdown attribute', () => (
    <div style={{ width: '100% ' }} >
      <RCMarkedElement markdown={"### This is Markdown\n\nAnd this is the text"} />
      <hr />
      <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
        <div className="markdown-html"></div>
        <script type="text/markdown">
{`
This is done using the following:
\`\`\`javascript
  <RCMarkedElement
    markdown={"# This is Markdown\\n\\nAnd this is the text"}
  />
\`\`\`
`}
        </script>
      </RCMarkedElement>
    </div>
  ))
  .add('Alternative usage: Adding a special div with className="markdown-html"', () => (
    <div style={{ width: '100% ' }} >
      <RCMarkedElement markdown={"### This is Markdown\n\nAnd this is the text"}>
        <div className="markdown-html"></div>
      </RCMarkedElement>
      <hr />
      <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
        <div className="markdown-html"></div>
        <script type="text/markdown">
          {
`
This is done using the following:
  \`\`\`javascript
  <RCMarkedElement
    markdown={"### This is Markdown\\n\\nAnd this is the text"}
  >
    <div className="markdown-html"></div>
  </RCMarkedElement>
  \`\`\`
`
          }
        </script>
      </RCMarkedElement>
    </div>
  ))
  .add('Alternative usage: Putting the markdown text inside script type="text/markdown"', () => (
    <div style={{ width: '100% ' }} >
      <RCMarkedElement>
        <div className="markdown-html"></div>
        <script type="text/markdown">
          {"### This is Markdown\n\nAnd this is the text"}
        </script>
      </RCMarkedElement>
      <hr />
      <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
        <div className="markdown-html"></div>
        <script type="text/markdown">
          {
`
This is done using the following:
\`\`\`javascript
  <RCMarkedElement>
    <div className="markdown-html"></div>
    <script type="text/markdown">
      {"### This is Markdown\\n\\nAnd this is the text"}
    </script>
  </RCMarkedElement>
\`\`\`
`
          }
        </script>
      </RCMarkedElement>
    </div>
  ));
