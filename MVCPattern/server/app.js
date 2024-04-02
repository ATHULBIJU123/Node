const express = require('express');
const app = express();
const connect = require('./db/config')
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();

//Database connection //
connect();

//client
app.use(express.static(__dirname + '/../client'));

//Parsing form datas
app.use(express.urlencoded(({extended: true}));

//Parsing 35ON datas
app.use(express.json());

//userRoutes
app.use(userRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

