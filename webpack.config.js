const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: "development",
    entry: {
      // navigation: './src/navigation.js',
      home: './src/home.js',
      menu: './src/menu.js',
      about: './src/about.js',
      navigation: './src/navigation.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/home.html',
        filename: 'index.html',
        // chunks: ['home']
        chunks: ['navigation', 'home']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'menu.html',
        // chunks: ['menu']
        chunks: ['navigation', 'menu']
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        filename: 'about.html',
        // chunks: ['about']
        chunks: ['navigation', 'about']
      })
    ],   
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },

 };

