import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCIcon } from '../index';
const icons = [
  'search',
  'people',
  'accessibility',
  'accessible',
  'account_balance',
  'email',
  'delete',
  'delete_forever'
];

storiesOf('RCIcon', module)
  .add('RCIcon look', () => (
    <div style={{padding: 5, display: 'flex'}} >
      {
        icons.map((icon, key) => (<RCIcon style={{margin: 5}} icon={icon} />))
      }
    </div>
  ));
