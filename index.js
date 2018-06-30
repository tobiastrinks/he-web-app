const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
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

// Development error handler
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// Production error handler
app.use((err, req, res) => {
  console.log(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  })
});

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port);
