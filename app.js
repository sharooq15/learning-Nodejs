// Node specific modules
const http = require('http');

// Third party imports
const express = require('express');

// Self imports

const app = express();

// Using middle wares
// The functions added to it will be executed for each incoming request. 
app.use((req, res, next) => {
  console.log('inside the middleware');
  next(); // This allows the middleware to go to the next functions.
});

app.use((req, res, next) => {
  console.log('from other middleware');
  // There is no default response.
  res.send('<h1>Hello from express js</h1>');
})

// This creates a server and listens to the particular port.
app.listen(3000);