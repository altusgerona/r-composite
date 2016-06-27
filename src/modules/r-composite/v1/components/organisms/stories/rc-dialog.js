import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { RCMarkedElement, RCButton } from '../../atoms';
import { RCDialog } from '../index';
import './rc-card.css';

storiesOf('RCDialog', module)
  .add('Basic usages', () => {
    let dialog;
    const dialogRef = (c) => {
      dialog = c;
    };
    const openDialog = () => {
      if (dialog) {
        dialog.open();
      }
    };
    return (
      <div>
        <div style={{ padding: 5 }} >
          <RCButton onClick={ openDialog } >Open Dialog</RCButton>
          <RCDialog ref={dialogRef}>
            <h2>Dialog Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </RCDialog>
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
let dialog;
const dialogRef = (c) => {
  dialog = c;
};
const openDialog = (c) => {
  if (dialog) {
    dialog.open();
  }
};
return (
  <div>
    <RCButton onClick={openDialog} >
      Open Dialog
    </RCButton>
    <RCDialog ref={dialogRef}>
      <h2>Dialog Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </RCDialog>
  </div>
  );
    \`\`\`
    `
              }
            </script>
          </RCMarkedElement>
        </div>
      </div>
    );
  })
  .add('Basic usages 2', () => {
    let dialog;
    let dialog2;
    const dialogRef = (c) => {
      dialog = c;
    };
    const dialog2Ref = (c) => {
      dialog2 = c;
    };
    const openDialog1 = () => {
      if (dialog) {
        dialog.open();
      }
    };
    const openDialog2 = () => {
      if (dialog2) {
        dialog2.open();
      }
    };
    return (
      <div>
        <div style={{ padding: 5 }} >
          <RCButton onClick={ openDialog1 } >Open Dialog</RCButton>
          <RCDialog ref={dialogRef} modal role="alertdialog">
            <h2>Alert</h2>
            Dropdown here
            <div className="buttons">
              <RCButton onClick={ openDialog2 }>
                More details
              </RCButton>
              <RCButton dialogDismiss>Cancel</RCButton>
              <RCButton dialogConfirm>Discard</RCButton>
            </div>
          </RCDialog>
          <RCDialog ref={dialog2Ref} modal>
            <h2>Details</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <div className="buttons">
                <RCButton dialogConfirm>Discard</RCButton>
              </div>
          </RCDialog>
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
let dialog;
let dialog2;
const dialogRef = (c) => {
  dialog = c;
};
const dialog2Ref = (c) => {
  dialog2 = c;
};
const openDialog1 = () => {
  if (dialog) {
    dialog.open();
  }
}
const openDialog2 = () => {
  if (dialog2) {
    dialog2.open();
  }
}
return (
  <div>
    <RCButton onClick={ openDialog1 } >Open Dialog</RCButton>
      <RCDialog ref={dialogRef} modal role="alertdialog">
        <h2>Alert</h2>
        Dropdown here
        <div class="buttons">
          <RCButton onClick={ openDialog2 }> More details </RCButton>
          <div className="buttons">
            <RCButton dialogDismiss>Cancel</RCButton>
            <RCButton dialogConfirm>Discard</RCButton>
          </div>
        </div>
      </RCDialog>
      <RCDialog ref={dialog2Ref} modal>
        <h2>Details</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
          <div className="buttons">
            <RCButton dialogConfirm>Discard</RCButton>
          </div>
      </RCDialog>
  </div>
);
\`\`\`
    `
              }
            </script>
          </RCMarkedElement>
        </div>
      </div>
    );
  });
