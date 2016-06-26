import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RCButton, RCIcon, RCMarkedElement } from '../index';

storiesOf('RCButton', module)
  .add('Basic usages', () => (
    <div>
      <div style={{ padding: 5, display: 'flex' }} >
        <RCButton style={{ margin: 5 }}>Flat</RCButton>
        <RCButton style={{ margin: 5 }} raised>Raised</RCButton>
        <RCButton style={{ margin: 5 }} noink>No Ink</RCButton>
        <RCButton style={{ margin: 5 }} disabled>Disabled</RCButton>
      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
  `
  This is done using the following:
  \`\`\`javascript
    <RCButton> Flat </RCButton>
    <RCButton raised> Raised </RCButton>
    <RCButton noink> No Ink </RCButton>
    <RCButton disabled> Disabled </RCButton>
  \`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Additional usages: Can add RCIcon inside', () => (
    <div>
      <div style={{ padding: 5, display: 'flex' }} >
        <RCButton style={{ margin: 5 }}><RCIcon icon="checked" />Flat</RCButton>
        <RCButton style={{ margin: 5 }} raised><RCIcon icon="file_download" />Raised</RCButton>
        <RCButton style={{ margin: 5 }} disabled><RCIcon icon="block" />Disabled</RCButton>

      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
`
This is done using the following:
\`\`\`javascript
  <RCButton>'
    <RCIcon icon="checked" /> Flat
  </RCButton>
  <RCButton raised>
    <RCIcon icon="file_download" /> Raised
  </RCButton>
  <RCButton disabled>
    <RCIcon icon="block" /> Disabled
  </RCButton>
\`\`\`
`
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>

  ))
  .add('Additional usages: Can add color based on MDL theme', () => (
    <div>
      <div style={{ padding: 5, display: 'flex' }} >
        <RCButton style={{ margin: 5 }} colored="colored">Colored</RCButton>
        <RCButton style={{ margin: 5 }} raised colored="accent">Accent</RCButton>
        <RCButton style={{ margin: 5 }} raised colored="primary">Primary</RCButton>
      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
`
This is done using the following:
\`\`\`javascript
  <RCButton colored="colored"> Colored </RCButton>
  <RCButton raised colored="accent"> Accent </RCButton>
  <RCButton raised colored="primary"> Primary </RCButton>
\`\`\`
`
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Additional usages: Add onClick handler', () => (
    <div>
      <div style={{ padding: 5, display: 'flex' }} >
        <RCButton raised onClick={ action('on clicked') }>Click me</RCButton>
      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
`
This is done using the following:
\`\`\`javascript
  const actionFunction = () => {
    /* action here */
  };
  <RCButton raised onClick={ actionFunction }>
    Click me
  </RCButton>
\`\`\`
`
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ));
