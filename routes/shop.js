const express = require('express');

const router = express.Router();

router.use('/',(req, res, next) => {
  res.send('helo for root')
})

module.exports = router;
