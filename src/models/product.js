import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {type: String},
    description: {type: String},
    price: {type: Number}
});

const Product = mongoose.model('Product', ProductSchema );