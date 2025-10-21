import express from 'express';

import indexRouter from './routers/index.router';

// Initialize the application
const app = express();

app.use('/', indexRouter);
console.log('Test github actions');
export default app;
