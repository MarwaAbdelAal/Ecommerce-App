const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    desc:{
        type: String,
        trim: true,
    },
    price:{
        type: Number,
        min: 100,
        max: 1000,
        default: 150
    },
    // img:{},
    // userId:{},
    // categoryId:{},
},{
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product