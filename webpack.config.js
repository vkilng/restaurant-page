const { writeFile } = require('fs');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    devMiddleware: {
      writeToDisk: (filePath) => { return /^(?!.*(hot)).*/.test(filePath); },
    },
  },
};