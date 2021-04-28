const express = require('express')//chamando express dentro da variável
const server = express()//criando um servidor que vai executar o express

server.get('/', function(req, res) {// req - requisição, res- resposta do servidor
  return res.send("Hi, Hello word!")
})// a '/' é a rota principal, get (pegar) barra

server.listen(5000, function() {
  console.log("server is running")
})//servidor irá ouvir a porta  5000, e depois rodar a função