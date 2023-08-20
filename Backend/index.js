// import express 
const express = require('express');

//importing routers
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');
const utilRouter = require('./routers/util');
const cors = require('cors');



//initaialize expresss app
const app = express();
const port = 5000;

//middleware

app.use(express.json());

app.use(cors({
    origin: [ 'http://localhost:3000']
}));

app.use('/user', userRouter);
app.use('/blog',blogRouter);
pp.use('/util',utilRouter);

//routes


app.get('/',(request,response)=> {
    response.send('Response from express');
});
//add
app.get('/add',(request,response)=> {
    response.send('Response add from express');
});
//getall
app.get('/getall',(request,response)=> {
    response.send('Response get all from express');
});
//delete
app.get('/delete',(request,response)=> {
    response.send('Response delete from express');
});
app.listen (port, () => { console.log('server started')});