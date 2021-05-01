// Node specific modules
const http = require('http');

// Third party imports
const express = require('express');
const bodyParser = require('body-parser');

// Self imports
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use((req,res,next) => {
  res.status(404).send('404 Not Found');
})
// Using middle wares
// The functions added to it will be executed for each incoming request. 
// app.use('/add-product',(req, res, next) => {
//   console.log('inside the middleware');
//   next(); // This allows the middleware to go to the next functions.
// });



// This creates a server and listens to the particular port.
app.listen(3000);