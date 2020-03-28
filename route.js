const router = require('express').Router();
const service = require('./service');

router.get('/list', (req, res) => {
   return service
     .getList(req.query)
     .then(data => {
       res.json({data, statusCode: 200, message: 'Operation Successful'});
     })
     .catch(err => {
      res.json({statusCode: 400, message: err.message});
     })
});

router.post('/log', (req, res) => {
  return service
    .addLog(req.body)
    .then(data => {
      res.json({data, statusCode: 200, message: 'Operation Successful'});
    })
    .catch(err => {
      res.json({statusCode: 400, message: err.message});
    })
});

module.exports = router;
