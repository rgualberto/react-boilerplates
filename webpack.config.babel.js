/*global __dirname */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';


export default {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      filename: 'index.html',
      title: 'React Boilerplate',
      appMountIds: ['root'],
      mobile: true
    })
  ],

  mode: 'development',

  devServer: {
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  }
};
