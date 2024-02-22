const { getAll, create, remove } = require('../controllers/category.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerProduct = express.Router();

routerProduct.route('/')
  .get(getAll)
  .post(verifyJWT, create);

routerProduct.route('/:id')
  .delete(verifyJWT, remove)

module.exports = routerProduct;