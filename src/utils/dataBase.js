
const mongoose = require('mongoose');

import '../models/product';

const Product = mongoose.model('Product');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/products')
}
export function ProductList() {
    return Product.find();
}

