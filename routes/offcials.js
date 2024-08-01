var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Aqui seria a pagina de funcionarios, seja não bem vindo');
});

router.get('/cfuncionarios', function(req, res, next) {
    res.send('Consultando funcionarios pelo id');
  });

module.exports = router;
