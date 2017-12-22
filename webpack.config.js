const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'aframe-stl-model-component.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
    uglifyOptions: {
      beautify: false,
      ecma: 6,
      compress: true,
      comments: false
    }})
  ]
};
