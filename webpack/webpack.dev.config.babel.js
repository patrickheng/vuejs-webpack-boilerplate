import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  context: path.resolve(__dirname, '..'),
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.join( __dirname, '..', 'src' )
    ],
    alias: {
      'Container': 'helpers/Container'
    },
    extensions: [
      '.js',
      '.jsx',
      '.json'
    ]
  },
  module: {
    rules: [
      {
          test: /\.js?$/,
          exclude: /node_modules/,
          enforce: "pre",
          loader: 'eslint-loader'
      },
      {
        test: /\.html?$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            "presets": [["es2015", {"modules": false}]]
        }
      },
      {
        test: /node_modules/,
        loader: 'ify-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: 'css-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: 'sass-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      '__DEV__': JSON.stringify(true),
      '__PROD__': JSON.stringify(false)
    }),
    new webpack.ProvidePlugin({
      'Vue': 'vue'
    }),
    new CopyWebpackPlugin([
      { from: 'static' }
    ],
    { ignore: ['.DS_Store', '.keep'] })
  ]
};
