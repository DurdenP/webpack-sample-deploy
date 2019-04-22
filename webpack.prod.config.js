/*module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/app.bundle.js'
  }
}*/
var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


var BUILD_DIRECTORY = path.join(__dirname, 'dir')
var APP_DIRECTORY = path.join(__dirname, 'src')

var config = {
  //entry: APP_DIRECTORY + '/index.js',
  mode: 'production',
  entry: {
    desktop: APP_DIRECTORY + '/index.js'
  },
  output: {
    path: BUILD_DIRECTORY,
    filename: '[name].[contenthash].bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-class-properties"]
          }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: BUILD_DIRECTORY, //can be an array
    compress: true,
    port: 9000,
    disableHostCheck: false, //set to false in the devserver -->why? apps that do not check the host are vulnerable to DNS rebinding attacks.
    //headers:{} //to add headers to the requests which arrives to the server (useful to add auth, for example)
    open: true, //open a tab whenever the server run
    hot: false //use the hotModulePlugin
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin()
  ]
}


module.exports = config