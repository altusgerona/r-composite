import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCIcon, RCMarkedElement } from '../index';
const icons = [
  'search',
  'people',
  'accessibility',
  'accessible',
  'account_balance',
  'email',
  'delete',
  'delete_forever',
];

storiesOf('RCIcon', module)
  .add('Basic Usage', () => (
    <div>
      <div style={{ padding: 5, display: 'flex' }} >
        {
          icons.map((icon, key) => (<RCIcon style={{ margin: 5 }} icon={icon} key={key} />))
        }
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
  ${icons.map((icon) => (`<RCIcon icon="${icon}" />`)).join('\n  ')}
\`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ));
