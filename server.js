const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

// Pegando arquivos estátivos (CSS, JS)
server.use(express.static('public'))

// Pegando a view engine, (HTML, NJK)
server.set("view engine", "njk")

nunjucks.configure("layouts", {
    express:server,
    autoescape: false,
    noCache: true
})

// Trazendo o front end para o servidor
server.get('/', function(req, res) {
    res.render("index")
})

server.get('/about', function(req, res) {
    res.render('about')
})

server.get('/revenue', function(req, res) {
    res.render('revenue', {items:recipes})
})

server.get('/recipe/:id', function(req, res) {
    const id = req.params.id
    const recipe = recipes.find(function(recipe) {
        return recipe.id == id
    })

    if (!recipe) {
        return res.render('not-found')
    }

    return res.render('recipe', {item: recipe})
})

server.listen(3000, function() {
    console.log('server is running')
})
