import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()
//buscar
app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id
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
    res.send({ message: "Pessoa criada com sucesso" })
})

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})