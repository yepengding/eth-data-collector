const express = require('express');
const BlockDataCollector = require("../core/BlockDataCollector");
const router = express.Router();

const collector = new BlockDataCollector();

/* GET gas current price. */
router.get('/current/number',   async function(req, res, next) {
  const blockNumber = await collector.fetchCurrentBlockNumber();
  res.json(blockNumber);
});

module.exports = router;
