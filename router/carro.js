import express from "express"
import carros from "../repository/carro.js"
const router = express.Router()
// Buscar todos
router.get("/buscar", )
// Buscar Um
router.get("/detalhe/:id", )
// Criar
router.post("/criar", )
// Alterar
router.post("/alterar", )
// Deletar
router.post("/deletar", )
export default router