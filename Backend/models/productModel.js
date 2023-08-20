const {Schema, model} = require('../connection');

const myschema = new Schema({
    product : String,
    brand: String,
    price : Number,
    image : String,
    context : String
});

module.exports = model( 'product', myschema );