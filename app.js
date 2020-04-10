const express = require('express');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/error-controller');
const AppError = require('./utils/app-error');
const yachtRouter = require('./routes/yacht-routes');
const userRouter = require('./routes/user-routes');

const app = express();

// 1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 2) Routes
app.use('/api/v1/yachts', yachtRouter);
app.use('/api/v1/users', userRouter);

// 3) Error Handling
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
