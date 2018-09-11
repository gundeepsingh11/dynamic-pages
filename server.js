const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3001;

const app = next({dir: './app', dev });
const handle = app.getRequestHandler();

const getRoutes = require('./app/routes');

const routes = getRoutes();
app.prepare().then(() => {
  const server = express();
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query = {} } = parsedUrl;
    const route = routes[pathname];
    if (route) {
      // whatever url is hit it will always redirect to "GenericController"
      const actualPage = '/GenericController'
      return app.render(req, res, actualPage, query);
    }
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});