const { error } = require('console');
var express = require('express');
const mysql = require('../mysql')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let listaUsers = ["Kennyd", "Jainy", "Julia"];
  res.render('users', { users: listaUsers });

  // Comentado pois `res.send` após `res.render` não é necessário
  // res.send('Lista de usuarios');

  mysql.connect();
  mysql.consultUser()
    .then((users) => {
      res.render('users', { users: users });
    })
    .catch((error) => {
      console.error('erro na consulta: ', error);
      res.status(500).send('Erro na consulta ao banco de dados.');
    })
    .finally(() => {
      mysql.disconnect();
    });
});

module.exports = router;
