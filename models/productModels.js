const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Plase enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,

        }
    },
    {
        timesTamps: true
    }
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product;