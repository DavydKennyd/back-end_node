const { error } = require('console');
var express = require('express');
const mysql = require('../mysql')
var router = express.Router();

router.get('/', function(req, res, next) {
  

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



  router.get('/new', function(req,res){
    res.render('novoUsuario', {title:"Cadastro do Usuario"})
  })
  router.post('/newuser', function(req, res){
    const {nome,cpf,idade,endereco} = req.body
    console.log(nome,endereco)
    let cadastro =  mysql.insertUser(nome,cpf,idade,endereco)
    if (cadastro){
      res.send("Efetuado com sucesso")
    }else{
      //res.status(304).send("Ocorreu algum problema")
      res.send("Ocorreu algum problema, RECEBA!!")
    }

  })
module.exports = router;
