import { Router } from 'express';

import indexControllers from '../controllers/index.controller.ts';

// Initialize the index router
const indexRouter: Router = Router();

// Get the index
indexRouter.get('/', indexControllers.getIndex);

export default indexRouter;
