
const mongoose = require('mongoose');
import '../models/product';

const Product = mongoose.model('Product');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/product')
}
export function ProductList() {
    return Product.find();
}

