import express from 'express'
import somar from '../service/cachorro.js'

const router = express.Router()
router.post("/somar", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = somar(Number(num1), Number(num2))

    res.status(200).send({
        message: resultado
    })
})

export default router