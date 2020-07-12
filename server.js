const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

// Pegando a view engine, (HTML, NJK, JS...)
server.set("view engine", "html")

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