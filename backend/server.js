const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const movies = require('./routes/api/movies');
dotenv.config({ path: './config.env'});
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(cookieParser());
mongoose.connect('mongodb://localhost/movies',{ useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', () => {
    console.log('Mongodb is on');
}).on('error', (error) => {
    console.log(error);
})

app.use('/api/movies',movies);

app.use('/api/items',items);

const authenticate = (req,res,next) => {
    next();
}

app.get('/', (req,res) => {
    res.send('<h1>GET</h1>') 
})

// app.get('/about',authenticate, (req,res) => {
//     res.send('about ');
// })

app.listen(port, () => console.log(`Started on http://localhost:${port}`))