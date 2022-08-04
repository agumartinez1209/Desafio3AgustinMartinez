const express = require ("express");

const Contenedor = require ("./contenedor")
const app = express();


app.get("/productos", (req, res) =>{

    async function main(){
    const product = new Contenedor ("./productos.txt");

     let allProducts = await product.getAll();
     res.send(allProducts);
}
 
main();
    
})

 app.get("/productoRandom", (req, res) =>{
    async function main(){
    const product = new Contenedor ("./productos.txt");

    let randomProduct = await product.getRandom()
         res.send(randomProduct);

        }

    main();
 })



const server = app.listen(8080, () =>{
    console.log(`el servidor http escuchando en el puerto ${server.address().port}`);
})

server.on("error", error => console.log(`error en el servidor${error}`))