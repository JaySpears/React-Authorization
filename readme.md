## What's under the hood?
The application is designed for a google chrome plugin. It's constructed with Facebook's React library, with the help of Webpack for file bundling, development servers, and hot reloading.

#### Webpack
- Loaders
  - Babel-loader
  - Style-loader
  - SCSS-loader
  - CSS-loader
  - React-hot-loader
- Runs webpack-dev-server and HotModuleReplacementPlugin for development help.

#### React
- Application is written in ES6.

#### Node
- Used to spin up local server for custom configuration of webpacks-dev-server.

## Up & Running
1. Install node dependencies. `npm install`
2. After dependencies are installed just run `npm start` to spin up the webpack-dev-server with hot reload.


## Deployment
With hot reloading, webpack doesn't output your compiled bundled file into this projects build directory. It stores it in memory on the webpack-dev-server. So you have to run `webpack` to actually compile this project for production builds.


## Directory Structure
This project is structured for React & Redux. I'll explain why each directory exists inside of the `app` directory.<br>
#### Directories
- **actions** - Actions for your redux reducers.
- **assets** - Images, and global styles that every state will use. Variables, mixins, etc.
- **components** - _Global_ components. Page container, etc.
- **containers** - Components that have application state injected via redux reducers, AKA 'Smart Components'. Trying to keep the structure similar to scene for referencing purposes.
- **reducers** - Redux reducers to handle application state.
- **scenes** - From my research, different states of your application should be nested inside of the scenes directory. So every different state of the app will have it's own directory. Each scene will be made of components, AKA 'Dumb Components'.



```
_app
|
├── _actions
|   └── index.js
├── _assets
|   ├── img
|   └── _styles
|       └── base.scss
├── _components
|   └──_container
|      ├── index.jsx
|      └── styles.scss
├── _containers
|   └── _tracker
|       ├── form.js
|       └── timer.js
├── _reducers
|   └── index.js
├── _scences
|   └── _tracker
|       ├── _form
|       |   ├── index.jsx
|       |   └── styles.scss
|       └── _timer
|           ├── index.jsx
|           └── styles.scss
└── index.jsx
```
