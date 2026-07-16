import express from 'express'

const router = express.Router()

router.post("/somar", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// subtrair
router.post("/subtrair", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) - Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// mult
router.get("/multiplicar", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)

    res.status(200).send({
        message: resultado
    })
})

// div
router.get("/dividir", (req, res) => {
    const { num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({
        message: resultado
    })
})

export default router