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
      splitChunks: {
        chunks: 'all', // Split both sync and async chunks
        minSize: 20000, // Minimum chunk size (20KB) before splitting
        maxSize: 244000, // Try to split chunks larger than 244KB
        minChunks: 1, // Minimum number of shared uses before splitting
        maxAsyncRequests: 30, // Max async chunks per page
        maxInitialRequests: 30, // Max initial chunks per page
        automaticNameDelimiter: '~', // Separator for generated chunk names
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/, // Group node_modules into a single chunk
            priority: -10, // Higher priority than default
            reuseExistingChunk: true // Avoid duplicate chunks
          },
          default: {
            minChunks: 2, // Shared modules used at least twice
            priority: -20, // Lower priority than vendors
            reuseExistingChunk: true // Reuse existing chunks if possible
          }
        }
      },
    },
 };

