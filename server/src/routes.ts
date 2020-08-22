import express from 'express';

import ClassController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassController();
const connectionsController = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.createClass);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;