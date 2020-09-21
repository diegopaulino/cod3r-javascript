const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // Vai gerar um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // Vai gerar um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto) // Vai gerar um JSON
})

app.listen(porta, () => {
    console.log(`Servidor está excutando na porta: ${porta}.`)
})