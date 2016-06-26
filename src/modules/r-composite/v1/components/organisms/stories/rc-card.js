import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCMarkedElement, RCButton, RCIcon, RCIconButton } from '../../atoms';
import { RCCard } from '../index';
import './rc-card.css';

storiesOf('RCCard', module)
  .add('Basic usages', () => (
    <div>
      <div style={{ padding: 5 }} >
        <RCCard
          style={{ margin: 5, width: 350 }}
          image="https://placeholdit.imgix.net/~text?txtsize=33&bg=ffc107&txtclr=000000&txt=350%C3%97150&w=350&h=150"
          heading="Emmental"
        >
          <div className="card-content">
            Emmentaler or Emmental is a yellow, medium-hard cheese that originated
            in the area around Emmental, Switzerland. It is one of the cheeses of
            Switzerland, and is sometimes known as Swiss cheese.
          </div>
          <div className="card-actions">
            <RCButton>Share</RCButton>
            <RCButton>Explore!</RCButton>
          </div>
        </RCCard>
      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
  `
  This is done using the following:
  \`\`\`jsx
    <RCCard image="./image.png" heading="Emmental">
      <div className="card-content">
        Emmentaler or Emmental is a yellow,
        medium-hard cheese that originated
        in the area around Emmental, Switzerland.
        It is one of the cheeses of Switzerland,
        and is sometimes known as Swiss cheese.
      </div>
      <div className="card-actions">
        <RCButton>Share</RCButton>
        <RCButton>Explore!</RCButton>
      </div>
    </RCCard>
  \`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ))
  .add('Additional usages', () => (
    <div>
      <div style={{ padding: 5 }} >
        <RCCard
          style={{
            margin: 5,
            width: 350,
            color: 'black'
          }}
          styleMixins={{
            '.card-header': {
              height: 220,
              backgroundSize: 'cover'
            },
          }}
          image="https://elements.polymer-project.org/bower_components/paper-card/demo/donuts.png"
        >
          <div className="card-content">
            <div className="cafe-header">Cafe Basilico
              <div className="cafe-location cafe-light">
                <RCIcon icon="location_on" />
                <span>250ft</span>
              </div>
            </div>
            <div className="cafe-rating">
              <RCIcon className="star" icon="star" />
              <RCIcon className="star" icon="star" />
              <RCIcon className="star" icon="star" />
              <RCIcon className="star" icon="star" />
              <RCIcon className="star" icon="star" />
            </div>
            <p>$・Italian, Cafe</p>
            <p className="cafe-light">
              Small plates, salads &amp; sandwiches in an
              intimate setting with 12 indoor seats plus patio seating.
            </p>
          </div>
          <div className="card-actions">
            <p>Tonight's availability</p>
            <div className="layout horizontal justified">
              <RCIconButton icon="event" />
              <RCButton>5:30PM</RCButton>
              <RCButton>7:30PM</RCButton>
              <RCButton>9:00PM</RCButton>
            </div>
            <RCButton className="cafe-reserve">Reserve</RCButton>
          </div>
        </RCCard>
      </div>
      <div>
        <hr />
        <RCMarkedElement style={{ width: '100%', wordBreak: 'break-all' }}>
          <div className="markdown-html"></div>
          <script type="text/markdown">
            {
  `
  This is done using the following:
  \`\`\`xml
    <style>
      .cafe-header {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
        color: black;
      }

      .cafe-location {
        float: right;
        font-size: 15px;
        vertical-align: middle;
      }

      .cafe-light {
        color: #757575;
      }

      .star {
        color: #ffc107;
      }

      .star:last-of-type {
        color: #9e9e9e
      }

      .cafe-reserve {
        color: #4285f4;
      }
    </style>

    <RCCard
      styleMixins={{
        '.card-header': {
          height: 220,
          backgroundSize: 'cover'
        },
      }}
      image="./donuts.png"
    >
      <div className="card-content">
        <div className="cafe-header">Cafe Basilico
          <div className="cafe-location cafe-light">
            <RCIcon icon="location_on" />
            <span>250ft</span>
          </div>
        </div>
        <div className="cafe-rating">
          <RCIcon className="star" icon="star" />
          <RCIcon className="star" icon="star" />
          <RCIcon className="star" icon="star" />
          <RCIcon className="star" icon="star" />
          <RCIcon className="star" icon="star" />
        </div>
        <p>$・Italian, Cafe</p>
        <p className="cafe-light">
          Small plates, salads &amp; sandwiches in an
          intimate setting with 12 indoor seats plus patio seating.
        </p>
      </div>
      <div className="card-actions">
        <p>Tonight's availability</p>
        <div className="layout horizontal justified">

          <RCButton>5:30PM</RCButton>
          <RCButton>7:30PM</RCButton>
          <RCButton>9:00PM</RCButton>
        </div>
        <RCButton className="cafe-reserve">Reserve</RCButton>
      </div>
    </RCCard>
  \`\`\`
  `
            }
          </script>
        </RCMarkedElement>
      </div>
    </div>
  ));
