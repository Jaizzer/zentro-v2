import express from 'express';

import indexRouter from './routers/index.router';

// Initialize the application
const app = express();

app.use('/', indexRouter);

export default app;
