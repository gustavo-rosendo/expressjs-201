const express = require('express');
const app = express();

// ExpressJS is basically 2 things:
// 1. Router
// 2. Middleware

// req ---MIDDLEWARE---> res
// Middleware function is any function that has access to the req, res and next object.

// req ---MIDDLEWARE---> res
// Ex.:
// 1. Request comes in
// 2. We need to validate the user, sometimes
// 3. We need to store some things in the DB
// 4. If there is data from the user, we need to parse it and store it
// 5. Send response

function validateUser(req, res, next) {
  // get info out of the req object
  // do some stuff with the DB
  res.locals.validated = true;
  console.log('VALIDATE RAN!');
  next();
}

app.use('/admin', validateUser);

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page!</h1>');
  console.log(res.locals.validated);
});

app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page!</h1>');
  console.log(res.locals.validated);
});

app.listen(3000);

