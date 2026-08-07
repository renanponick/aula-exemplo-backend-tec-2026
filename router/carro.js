import express from "express"
import carros from "../repository/carro.js"

const router = express.Router()

// Buscar todos
router.get("/buscar", (req, res) => {
    res.send({ mensagem: carros })
})
// Buscar Um
router.get("/detalhe/:id", (req, res) => {
    const id = req.params.id

    const carro = carros.find(it => it.id === id)

    res.send({ mensagem: carro })
})

// Criar
router.post("/criar", (req, res) => {
    // id, marca, ano
    const { id, marca, ano } = req.body

    if (!id || !marca || !ano) {
        res.send({ mensagem: "Favor informar todos os dados"})
        return
    }

    carros.push({ id, marca, ano })

    res.send({ mensagem: "Cadastrado com sucesso" })
})
// Alterar
router.post("/alterar", (req, res) => {})
// Deletar
router.post("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)

    res.send({ mensagem: "Deletado" })
})

export default router