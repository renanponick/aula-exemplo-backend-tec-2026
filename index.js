import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()

// buscar todos
app.get("api/pessoas", (req, res) => {
    console.log(bancoDeDados)
})

// buscar um
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.codigo
    const pessoa = bancoDeDados.find(it => it.id == id)
    if (!pessoa) {
        res.send({ message: "Pessoa não encontrada" })
        return
    }
    res.send({ pessoa })
})

//criar
app.get("/api/pessoa", (req, res) => {
    const { id, name } = req.query
    if(!id || !name) {
        res.send({ message: "Favor informar id e name" })
        return 
    }
    bancoDeDados.push({ id, name })
})

//alterar
app.get("api/alterar/:id", (req, res) => {
    const id = req.params.id
    const { name } = req.query
    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {
        res.send({ message: "Favor informar id" })
        return 
    }
    pessoa.name = name
    res.send({ "Pessoa alterada com sucesso" })
})

//deletar
app.get("/api/deletar/:id", (req, res) => {
    const id = req.params.id
    const pessoa = bancoDeDados.find(it => it.id == id)
    if(!pessoa) {
        res.send({ message: "Favor informar id e name" })
        return 
    }
    bancoDeDados.splice(it => it.id == id, 1)
    res.send({ message: "Pessoa deletada com sucesso" })
})

const app = express()

app.listen(300o, () => {
    console.log("Servidor escutando na porta 3000")
})