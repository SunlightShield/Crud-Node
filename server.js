// mongodb+srv://root:1234@serverlessinstance0.ir2fwdo.mongodb.net/?retryWrites=true&w=majority

const express = require ("express");
const mongoose = require ("mongoose");
const app = express()
const Product = require("./models/productModels") 

app.use(express.json())

//routes

app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/blog", (req, res) => {
    res.send("blog")
})

app.post("/product", async(req, res) => {
    
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
});

mongoose.connect("mongodb://admin:1234@ac-hyr6gvp-shard-00-00.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-01.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-02.icket4l.mongodb.net:27017/Node-Api?ssl=true&replicaSet=atlas-14a1u8-shard-0&authSource=admin&retryWrites=true&w=majority").
then(() => {
    app.listen(3000, () => {
        console.log("node api is running 3000")
    });  
}).catch((error) => {
    console.log(error)
})