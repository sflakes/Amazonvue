const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const User = require('./models/user');


dotenv.config();

//to connect ot mongodb cloud server
mongoose.connect(process.env.DATABASE, err => { //saving mongodb link with dotenv in different file
    if (err) {
        console.log(err);
    } else {
        console.log("Conected to the database");
    }
});

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//require API
const productRoutes = require("./routes/product");
app.use('/api', productRoutes);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('listening on port', 3000);
    }
});