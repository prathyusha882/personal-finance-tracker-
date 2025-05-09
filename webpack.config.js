const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Output bundle file name
    clean: true, // Clean the output directory before emit
  },
  mode: 'development', // Change to 'production' for production build
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply this rule to JS and JSX files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
        },
      },
      {
        test: /\.css$/, // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'], // Load CSS files
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory to serve static files
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port for the server
    open: true, // Automatically open the browser
    historyApiFallback: true, // Support for HTML5 History API
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the index.html file
      filename: 'index.html', // Output filename
    }),
  ],
};
