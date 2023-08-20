//title:string
//description : string
// image : String
//content : string
const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    image : String,
    content : String
});

module.exports = model( 'blogs', myschema );