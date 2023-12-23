const express = require ("express");
const mongoose = require ("mongoose");
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const productRoute = require("./routes/ProductRoutes")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", productRoute)


mongoose.connect("mongodb://admin:1234@ac-hyr6gvp-shard-00-00.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-01.icket4l.mongodb.net:27017,ac-hyr6gvp-shard-00-02.icket4l.mongodb.net:27017/Node-Api?ssl=true&replicaSet=atlas-14a1u8-shard-0&authSource=admin&retryWrites=true&w=majority").
then(() => {
    app.listen(3000, () => {
        console.log("node api is running 3000")
    });  
}).catch((error) => {
    console.log(error)
})