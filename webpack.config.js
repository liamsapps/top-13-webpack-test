const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

 module.exports = {
    mode: "production",
    entry: {      
      // main pages & navigation
      home: './src/home.js',
      menu: './src/menu.js',
      about: './src/about.js',
      navigation: './src/navigation.js',
      // menu item pages & navigation
      salads: './src/salads.js',
      pasta: './src/pasta.js',
      pizza: './src/pizza.js',
      desserts: './src/desserts.js',
      wine: './src/wine.js',
      menuNavigation: './src/menuNavigation.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'  // Extracts CSS for faster loading
      }),
      // main pages
      new HtmlWebpackPlugin({
        template: './src/home.html',
        filename: 'index.html',        
        chunks: ['navigation', 'home']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'menu.html',
        chunks: ['navigation', 'menu']
      }),
      new HtmlWebpackPlugin({
        template: './src/about.html',
        filename: 'about.html',
        chunks: ['navigation', 'about']
      }),
      // menu item pages
      new HtmlWebpackPlugin({
        template: './src/menu.html', // or create specific templates for each category
        filename: 'salads.html',
        chunks: ['navigation', 'menuNavigation', 'salads']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'pasta.html',
        chunks: ['navigation', 'menuNavigation', 'pasta']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'pizza.html',
        chunks: ['navigation', 'menuNavigation', 'pizza']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'desserts.html',
        chunks: ['navigation', 'menuNavigation', 'desserts']
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',
        filename: 'wine.html',
        chunks: ['navigation', 'menuNavigation', 'wine']
      })


    ],   
    module: {
        rules: [
        {
          test: /\.css$/i,
          // use: ["style-loader", "css-loader"],
          use: [MiniCssExtractPlugin.loader, "css-loader"],  // Better than style-loader
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },    
    optimization: {
      concatenateModules: true, // Merges module scopes where possible
      runtimeChunk: 'single', // Extracts runtime code into a separate file
      minimizer: [new CssMinimizerPlugin()],
      // NOTE: after removing 95% of optimization config, no change in page loading (revisit)
      splitChunks: {
        chunks: 'all', // Split both sync and async chunks        
      },
    },
 };

