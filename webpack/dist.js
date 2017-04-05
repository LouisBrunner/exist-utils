const webpackMerge = require('webpack-merge');
const commonConfig = require('./core.js');

module.exports = webpackMerge(commonConfig(), {
  entry: {
    'exist-utils': './src/index.js',
  },
  output: {
    path: `${__dirname}/../dist`,
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'ExistUtils',
  },
});
