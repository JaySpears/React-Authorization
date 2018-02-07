# React Authorization Application

### Client Code Architecture :computer:
`index.jsx` **->** Root file for the React application. Initializes the Redux store, routes, etc.</br>
`actions`  **->** Actions to be dispatched based on user events. Logging in, creating an account, etc.</br>
`assets`  **->** Global assets required throughout the application. Sass mixins, variables, etc.</br>
`components`  **->** Global components to be reused throughout the application. For example, a container component for responsiveness architecture.</br>
`reducers`  **->** Initial state for the redux store.</br>
`routes`  **->** Routes for the application.</br>
`scenes`  **->** Also known as pages. Scenes are the components to be displayed via routes. For example, the login route will display the login scene, etc.</br>

```
├── index.jsx
├── actions
|  └── ...
├── assets
|  └── ...
├── components
|  └── ...
├── reducers
|  └── ...
├── routes
|  └── ...
└── scenes
   └── ...
```

### Server Code Architecture :lock: :floppy_disk:
`index.js`  **->** Root file for the node server. </br>
`controllers`  **->** Callback method for routes, modifies client data before passing onto the model, etc.</br>
`models`  **->** Schema structure for database tables. These models are using Sequelize as an ORM.</br>
`routes`  **->** API endpoints. Authorizing user, logging in, etc.</br>

```
├── index.js
├── controllers
|  └── ...
├── models
|  └── ...
└── routes
   └── ...
```
