const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../views/add-product.html'))});

// Filters only the post requests.
router.post('/product',(req, res, next) => {
  console.log('req', req.body);
  res.redirect('/');
})

module.exports =  router;