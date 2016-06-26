import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCMarkedElement } from '../index';

storiesOf('RCMarkedElement', module)
  .add('Basics: adding a markdown attribute', () => (
    <div style={{width: '100% '}} >
      <RCMarkedElement markdown={"### This is Markdown\n\nAnd this is the text"} />
      <hr/>
      <RCMarkedElement style={{width: '100%', wordBreak: 'break-all'}}>
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
  .add('Adding a special div with class="markdown-html"', () => (
    <div style={{width: '100% '}} >
      <RCMarkedElement markdown={"### This is Markdown\n\nAnd this is the text"}>
        <div className="markdown-html"></div>
      </RCMarkedElement>
      <hr/>
      <RCMarkedElement style={{width: '100%', wordBreak: 'break-all'}}>
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
  ));
