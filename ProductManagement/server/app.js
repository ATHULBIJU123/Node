
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const app = express();
const port = 4000;


mongoose.connect('mongodb://127.0.0.1:27017/pms', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    startServer();
});

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

    //Get single users data
    app.get('/getSingleProductData/:id', async(req,res) => {
        try{
            const id = req.params.id;
            const singleProduct = await UserModel.findById(id);
            res.status(200).json(singleProduct);

        }
        catch (error){
            console.error('Error : ',error);
            res.status(500).send("Internal Server Error")
        }
    } )

    //Edit Product Data
    app.put('/editProductData/:id', async(req,res) => {
        try {
            const id  = req.params.id;
            const { product, price, size, quantity } = req.body;

            //update product data by finding and updating document 
            const updatedProduct = await UserModel.findByIdAndUpdate(id, { product, price, size, quantity }, { new: true });

            if (!updatedProduct) {
                return res.status(404).send('Product not found');
            }
    
            res.status(200).send('Success');
        } catch (error) {
            console.error("Error : ", error);
            res.status(500).send('Internal Server Error!!');
        }
    });

    //Delete Product Data
    app.delete("/deleteProductData/:id", async(req, res) => {
        try{
            const id = req.params.id;

            //Delete user data by findingn and removing the document
            await UserModel.findByIdAndDelete(id);

            res.status(200).send("Deleted Successfully");
        }
        catch (error){
            console.error("Error :", error);
            res.status(500).send('Internal Server Error');
        }
    });


    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}