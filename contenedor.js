const {promises: fs} = require("fs")

class Contenedor {
    constructor (ruta){
        this.ruta = ruta;
    }

    // async getById (id){

    //     const products = await this.getAll();
    //     const productById = products.find(p => p.id == id);
    //     return productById


    // }

    async getRandom(){
        const products = await this.getAll();
        return await products[Math.floor(Math.random() * products.length)];
    }

    async getAll (){
        try {
            const products = await fs.readFile(this.ruta, "utf-8")
            return JSON.parse(products);
        } catch (error) {
            return [];
        }
    }



}

module.exports = Contenedor;