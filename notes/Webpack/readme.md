# Webpack
Module Bundler for modern JavaScript applications.

## Core Concepts

#### Entry
> Webpack creates a graph of all of your applications dependencies. Entry is the starting point of this graph. Entry point tells webpack where to start and follows the graph of dependencies to know what to bundle.
```
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

#### Output
> Once all of your assets are bundled together, webpack still needs to know the destination for this bundled file.
```
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

#### Loaders
> Files that need to be transformed before being inserted into our graph to be bundled need loaders. So a file ending in `.jsx`, or even `.js` that was written with ES6 will need babel to compile it.
```
const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      // BABEL LOADER TO TRANSFORM FILES WITH THESE EXTENSIONS.
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};
```

#### Plugins
> Since Loaders only execute transforms on a per-file basis, plugins are most commonly used (but not limited to) performing actions and custom functionality on "compilations" or "chunks" of your bundled modules.
<br>
<br>
To use a loader, install it via npm, then require it in your `webpack.config.js` file.
```
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
```
Once we required the plugin, we can add it to the plugins property of our webpack.config object.
```
const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: './dist'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
