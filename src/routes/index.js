const toysRouter = require('./toys');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {

  // Các method chính:
  // Create = Post 
  // Read = Get
  // Update = Put
  // Delete = Delete
  app.use('/toys', toysRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);

}

module.exports = route;