import express from 'express'

const router = express.Router()

router.post("/api/v1/somar", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// subtrair
router.post("/api/v1/subtrair", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) - Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// mult
router.get("/api/v1/multiplicar", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// div
router.get("/api/v1/dividir", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({
        message: resultado
    })
})

export default router