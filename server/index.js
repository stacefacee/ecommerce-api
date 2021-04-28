const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

const port = 3010;


app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(3010, () => {
  console.log(`server running on port: ${port}`);
});

