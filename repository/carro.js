import carro from '../model/carro.js';

// INSERT INTO carros (marca, ano) VALUES ("FIAT", 1998)
class RepositoryCarro {
    
    async Find() {
        const carros = await carro.findAll()

        return carros
    }

    async Create() {

    }

    async Update() {

    }

    async Delete() {

    }
}

export default new RepositoryCarro()