// Dependencies.
import path from 'path';
import { app } from './../index.js';

// Route classes.
import mainRoutes from './route.main.js';
import userRoutes from './route.users.js';

// Get route methods.
app.get('*', mainRoutes.Root);

// Post route methods.
app.post('/user/authorize', userRoutes.Authorize);
app.post('/user/create', userRoutes.Create);
app.post('/user/login', userRoutes.Login);
