// Node specific modules
const http = require('http');

// Third party imports
const express = require('express');
const bodyParser = require('body-parser');

// Self imports

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
// Using middle wares
// The functions added to it will be executed for each incoming request. 
// app.use('/add-product',(req, res, next) => {
//   console.log('inside the middleware');
//   next(); // This allows the middleware to go to the next functions.
// });

app.use('/add-product',(req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

// Filters only the post requests.
app.post('/product',(req, res, next) => {
  console.log('req', req.body);
  res.redirect('/');
})
app.use('/',(req, res, next) => {
  res.send('helo for root')
})
// This creates a server and listens to the particular port.
app.listen(3000);