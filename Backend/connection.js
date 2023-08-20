const mongoose = require('mongoose');

const url = "mongodb+srv://aamna04khan:v04e6hpYWW6Ubs3R@cluster0.iouvkyf.mongodb.net/?retryWrites=true&w=majority";

// asynchrounous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;