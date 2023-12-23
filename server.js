// mongodb+srv://root:1234@serverlessinstance0.ir2fwdo.mongodb.net/?retryWrites=true&w=majority

const express = require ("express");
const mongoose = require ("mongoose");
const app = express()
const Product = require("./models/productModels") 
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//routes

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/blog", (req, res) => {
    res.send("blog")
})

//traer
app.get('/mostrar', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//traer por id
app.get('/mostrar/id/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//crear
app.post('/crear', async(req, res) => {
    const {name, quantity, price, image} = req.body
    try {
        const product = new Product ({name, quantity, price, image});
        await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// editar
app.put('/editar/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `no existen productos con esa Id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/eliminar/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `no existen productos con esa Id ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb://admin:1234@ac-hyr6gvp-shard-00-00.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-01.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-02.icket4l.mongodb.net:27017/Node-Api?ssl=true&replicaSet=atlas-14a1u8-shard-0&authSource=admin&retryWrites=true&w=majority").
then(() => {
    app.listen(3000, () => {
        console.log("node api is running 3000")
    });  
}).catch((error) => {
    console.log(error)
})