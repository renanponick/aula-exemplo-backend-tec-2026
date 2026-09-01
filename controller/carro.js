import ServiceCarro from '../service/carro.js'

class ControllerCarro {
    // Recebimento e a Saida das info
    async Buscar(_, res) {
        try {
            const carros = await ServiceCarro.Buscar()
            res.status(200).send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = ServiceCarro.Detalhe(id)

            res.status(200).send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body

            ServiceCarro.Criar(id, marca, ano)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
            const { marca, ano } = req.body
            const id = req.params.id

            ServiceCarro.Alterar(id, marca, ano)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Deletar(req, res) {
        try {
            const identificador = req.params.id

            ServiceCarro.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerCarro()