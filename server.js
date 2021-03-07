require('dotenv').config();
const express = require('express');
const app = express ();
const PORT = process.env.PORT; 
const ShortUrl = require('./models/shortUrl');

const mongoose = require('mongoose');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/shortUrls', (req, res) => {
  ShortUrl.create({ full: req.body.fullUrl});  
})

app.listen(PORT, () => {
    console.log(`You are connected to ${PORT}`)
});