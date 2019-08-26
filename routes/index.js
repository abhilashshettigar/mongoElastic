var express = require('express');
var router = express.Router();
const esClient = require('../services/esService');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({ message: "Hello world" });
});

router.get('/ping', async (req, res, next) => {
  esClient.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, async (error, data) => {
    if (error) {
      res.json({ message: 'elasticsearch cluster is down!' });
    } else {
      console.log(data)
    }
  });
  const health = await esClient.cluster.health({});
  res.json({ message: 'All is well', status: health });
})
module.exports = router;
