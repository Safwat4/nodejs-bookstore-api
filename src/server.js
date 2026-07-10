// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION. Shutting down...');
  console.log(err.name, err.message, err);
  process.exit(1);
});

const app = require('./app');
const connectToDatabase = require('./config/db');
const { PORT, NODE_ENV } = require('./config/env');
connectToDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} (${NODE_ENV} environment)`);
});

// Handling unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION Shutting down...');

  server.close(() => {
    process.exit(1);
  });
});
