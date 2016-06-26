const path = require('path');
const merge = require('webpack-merge');
const parts = require('../../libs/parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  style: [
    path.join(__dirname, 'node_modules', 'material-design-lite', 'material.css'),
    path.join(__dirname, 'src', 'index.scss')
  ],
  build: path.join(__dirname, 'build')
};

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  module: {
    preLoaders: [
      {
        test: /(\.jsx?$|\.js?$)/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'babel?presets[]=stage-2,presets[]=react,presets[]=es2015'
        ]
      }
    ]
  }
};

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.

  return config = merge(
    config,
    common,
    {
      devtool: 'eval-source-map'
    },
    parts.setupCSS(PATHS.style)
  );
};
