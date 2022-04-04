const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    hot: false,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/views/**/*.liquid',
          to: 'views/[name][ext]',
          toType: 'template',
        },
      ],
    }),
  ],
};
