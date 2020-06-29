const express = require('express'); 
const app = express();
const productRoutes = require('./products');
app.use('/products', productRoutes);
module.exports = app;
// JavaScript source code
