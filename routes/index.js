const express = require('express');
const router = express.Router();

router.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = router;
