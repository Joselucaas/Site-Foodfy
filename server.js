const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Pegando arquivos estátivos (CSS, JS)
server.use(express.static('public'))

// Pegando a view engine, (HTML, NJK)
server.set("view engine", "njk")

nunjucks.configure("layouts", {
    express:server
})

// Trazendo o front end para o servidor
server.get('/', function(req, res) {
    res.render("index")
})

server.get('/about', function(req, res) {
    res.render('about')
})

server.get('/revenue', function(req, res) {
    res.render('revenue')
})

server.listen(3000, function() {
    console.log('Server is runing')
})