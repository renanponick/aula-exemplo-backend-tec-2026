import RepositoryCarro from '../repository/carro.js'

class ServiceCarro {

    // Core- Regra de Negocio
    async Buscar() {
        return RepositoryCarro.Find()
    }

    Detalhe(id) {
        // if(!id) {
        //     throw new Error("Favor informar o ID")
        // }

        // const carro = RepositoryCarro.find(it => it.id === id)
        
        // if(!carro) {
        //     throw new Error(`ID ${id} do carro não encontrado`)
        // }

        // return carro
    }
    // Função(parametros, parametros, parametros)
    Criar(id, marca, ano) {
        // if (!id || !marca || !ano) {
        //     throw new Error("Favor informar todos os dados")
        // }
        // RepositoryCarro.push({ id, marca, ano })
        // return { id, marca, ano }
    }

    Alterar(id, marca, ano) {
        // if (!id || !marca || !ano) {
        //     throw new Error("Favor informar os dados");
        // }

        // const index = RepositoryCarro.findIndex(carro => carro.id === Number(id));

        // if (index) {
        //     throw new Error("Carro não encontrado");
        // }

        // RepositoryCarro[index] = {
        //     id: Number(id),
        //     marca,
        //     ano
        // };

        // return RepositoryCarro[index]
    }

    Deletar(id) {
        // if (!id) {
        //     throw new Error("Favor informar o ID")
        // }
        
        // const carro = RepositoryCarro.findIndex(it => it.id == id)

        // RepositoryCarro.splice(carro, 1)

        // return id
    }

}

export default new ServiceCarro()