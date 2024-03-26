const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const app = express();
const port = 4000;


mongoose.connect('mongodb://127.0.0.1:27017/pms', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

const userSchema = new mongoose.Schema ({
    
    product: String,
    price: Number,
    size:Number,
    quantity:Number,
});

const UserModel = mongoose.model('product', userSchema);

function startServer() {

    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('../client'));

    app.post('/add', async (req, res) => {
        try {
            const productData = req.body;
            console.log('Received data:', productData);
            const user = new UserModel(productData);
            await user.save();
            res.status(200).send('Data Added successfully!');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    app.get('/getData', async (req, res) => {
        try {
            const productDataArr = await UserModel.find();

            res.status(200).json(productDataArr);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}