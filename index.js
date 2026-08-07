import express from 'express'
import carro from './router/carro.js'

const app = express()
app.use(express.json())

app.use("/api/v1/carro", carro)

app.listen(3000, () => {
    console.log("Servidor Porta 3000")
})