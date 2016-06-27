import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RCCheckbox, RCMarkedElement } from '../index';

storiesOf('RCCheckbox', module)
  .add('Basic Usage', () => (
    <div>
      <div style={{ padding: 20, display: 'flex' }} >
        <RCCheckbox label="Checkbox" />
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
  <RCCheckbox label="Checkbox" />
\`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Basic Usage: Default Checked', () => (
    <div>
      <div style={{ padding: 20, display: 'flex' }} >
        <RCCheckbox label="Checkbox" checked />
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
  <RCCheckbox label="Checkbox" checked />
\`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Basic Usage: Disabled', () => (
    <div>
      <div style={{ padding: 20, display: 'flex' }} >
        <RCCheckbox label="Checkbox" disabled />
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
  <RCCheckbox label="Checkbox" disabled />
\`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Basic Usage: Add onClick', () => (
    <div>
      <div style={{ padding: 20, display: 'flex' }} >
        <RCCheckbox label="Checkbox" onClick={ action('on clicked event') } />
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
  <RCCheckbox label="Checkbox" onClick={ /* function here */ }/>
\`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ));
