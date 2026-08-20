class ControllerCarro {

    // Recebimento e a Saida das info
    Buscar(req, res) {
        try {
            res.send({ mensagem: carros })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Detalhe(req, res) {
        try {
            const id = req.params.id
            const carro = carros.find(it => it.id === id)

            res.send({ mensagem: carro })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Criar(req, res) {
        try {
            const { id, marca, ano } = req.body
            if (!id || !marca || !ano) {
                res.send({ mensagem: "Favor informar todos os dados" })
                return
            }
            carros.push({ id, marca, ano })
            res.send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
            
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    Deletar(req, res) {
        try{
            const id = req.body.id
            carros.splice(it => it.id === id, 1)
            res.send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}