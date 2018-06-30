const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const Logger = require('./logger');
global.logger = new Logger();

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
new Builder(nuxt).build()
  .catch((error) => {
    console.error(error); // eslint-disable-line no-console
    process.exit(1)
  });

app.use(function(err, req, res, next) {
  global.logger.logReq(500, req.method, req.path, JSON.stringify(err));
  res.status(500);
});

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
