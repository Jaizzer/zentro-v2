import express from 'express';

import indexRouter from './routers/index.router.ts';

// Initialize the application
const app = express();

console.log('Test');

app.use('/', indexRouter);

export default app;
