var express = require('express');
var router = express.Router();
const os = require("os");


router.get('/', function(req, res, next) {
  res.json({hostname:os.hostname(),
    type:os.type(),
    platform:os.platform(),});
});


router.get('/cpus', function(req, res, next) {
    const cpus = os.cpus();
    const processors = cpus.map(cpu => ({
      model: cpu.model,
      speed: cpu.speed,
      times: cpu.times
    }));
  
    res.json(processors);
  });

  router.get('/cpus/:id', function(req, res, next) {
    const id = req.params.id;
    res.json(os.cpus()[id]);
  });

module.exports = router;
