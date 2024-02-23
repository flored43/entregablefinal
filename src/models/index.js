const Cart = require("./Cart");
const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");

//  Product -> categoryId
Product.belongsTo(Category)
Category.hasMany(Product)

// Cart -> userId
Cart.belongsTo(User)
User.hasMany(Cart) // User just could has one cart

// Cart -> productId
Cart.belongsTo(Product)
Product.hasMany(Cart)