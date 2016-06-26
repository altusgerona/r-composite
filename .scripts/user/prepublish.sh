# Use this file to your own code to run at NPM `prepublish` event.
echo "Copying material design lite stylesheet"
cp ./node_modules/material-design-lite/material.css ./dist
