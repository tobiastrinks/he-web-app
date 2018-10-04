const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const Raven = require('raven');
const { logReq } = require('./logger');

// Must configure Raven before doing anything else with it
Raven.config(process.env.SENTRY_DNS).install();

// The request handler must be the first middleware on the app
app.use(Raven.requestHandler());

// The error handler must be before any other error middleware
app.use(Raven.errorHandler());

const host = process.env.HOST || '0.0.0.0';
const port = 3000;
app.set('port', port);

// Import and Set Nuxt.js options
let config = require('./nuxt.config.js');
config.dev = (process.env.NODE_ENV !== 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (process.env.NODE_ENV !== 'production') {
  new Builder(nuxt).build()
    .catch((error) => {
      console.error(error); // eslint-disable-line no-console
      process.exit(1);
    });
}

app.use(function (err, req, res, next) {
  logReq(500, req.method, req.path, JSON.stringify(err));
  res.status(500);
});

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
