import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RCButton, RCIcon } from '../index'

storiesOf('RCButton', module)
  .add('Types of Button', () => (
    <div style={{padding: 5, display: 'flex'}} >
      <RCButton style={{margin: 5}}>Flat</RCButton>
      <RCButton style={{margin: 5}} raised={true}>Raised</RCButton>
      <RCButton style={{margin: 5}} noink={true}>No Ink</RCButton>
      <RCButton style={{margin: 5}} disabled={true}>Disabled</RCButton>
    </div>
  ))
  .add('Can add RCIcon inside', () => (
    <div style={{padding: 5, display: 'flex'}} >
      <RCButton style={{margin: 5}}><RCIcon icon="checked"/>Flat</RCButton>
      <RCButton style={{margin: 5}} raised={true}><RCIcon icon="file_download"/>Raised</RCButton>
      <RCButton style={{margin: 5}} disabled={true}><RCIcon icon="block"/>Disabled</RCButton>
    </div>
  ))
  .add('Can add color based on MDL theme', () => (
    <div style={{padding: 5, display: 'flex'}} >
      <RCButton style={{margin: 5}} colored="colored">Colored</RCButton>
      <RCButton style={{margin: 5}} raised={true} colored="accent">Accent</RCButton>
      <RCButton style={{margin: 5}} raised={true} colored="primary">Primary</RCButton>
    </div>
  ))
