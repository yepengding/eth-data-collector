const express = require('express');
const GasDataCollector = require("../core/GasDataCollector");
const router = express.Router();

const collector = new GasDataCollector();

/* GET gas current price. */
router.get('/current/price',   async function(req, res, next) {
  const gasPrice = await collector.fetchGasPrice();
  res.json(gasPrice);
});

module.exports = router;
