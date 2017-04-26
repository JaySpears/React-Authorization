## What's under the hood?
The application is designed for a google chrome plugin. It's constructed with Facebook's React library, with the help of Webpack for file bundling, development servers, and hot reloading.

#### Webpack
- Loaders
  - Babel-loader
  - Style-loader
  - Ssss-loader
  - CSS-loader
  - React-hot-loader
- Runs webpack-dev-server and HotModuleReplacementPlugin for development help.

#### React
- Application is written in ES6.

#### Node
- Used to spin up local server for custom configuration of webpacks-dev-server.

## Up & Running
1. Install node dependencies. `npm install`
2. After dependencies are installed just run node to spin up your server with hot reload. `node server.js`


## Deployment
With hot reloading, webpack doesn't output your compiled bundled file into this projects build directory. It stores it in memory on the webpack-dev-server. So you have to run `webpack` to actually compile this project for production builds.
