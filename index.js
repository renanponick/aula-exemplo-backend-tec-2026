import express from 'express'
import clientes from './router/clientes.js';
import cachorros from './router/cachorro.js';

const app = express()

app.use(express.json())

app.use('/api/v1/clientes', clientes)
app.use('/api/v1/cachorros', cachorros)

app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000")
})