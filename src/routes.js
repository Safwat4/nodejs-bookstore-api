const usersRoutes = require('./modules/users/route');
const booksRoutes = require('./modules/books/route');



const mountRoutes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Book Store API' });
  });

  // users routes
  app.use('/api/v1.0/', usersRoutes);

  // books routes
  // app.use('/api/v1.0/books', booksRoutes);

  // 404 handler
  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });
};

module.exports = mountRoutes;
