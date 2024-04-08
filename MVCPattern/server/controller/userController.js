const { get, default: mongoose } = require('mongoose');
const users = require ('../db/models/users');
const { error_function } = require('../utils/response-handler');
const { success_function} = require('../utils/response-handler');
const bcrypt = require ('bcryptjs');

exports.createUser = async function (req, res) {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;

        const email = req.body.email;
        const password = req.body.password;
        console.log("password :", password);

        //Validations
        // if(!name) {
        //     res.status(400).send("Name is required");
        //     return;
        // }

        let email_count = await users.countDocuments({email});

        if(email_count >0) {

            let response = error_function ({
                statusCode : 400,
                message : "Email alrady exists"
            });

            res.status(400).send(response);
            return;
        }

        let salt = await bcrypt.genSalt(10);
        console.log("salt :",salt);

        let hashed_password = bcrypt.hashSync(password,salt);
        console.log("hashed_password : ", hashed_password);

        const new_user = new users({
            firstName : firstname,
            lastName : lastname,
            email,
            hashed_password,
        });

        const saved_user = await new_user.save();

        if(saved_user) {
            let response = success_function ({
                statusCode : 200,
                data : saved_user,
                message : "User created successfully",
            })
            res.status(200).send(response);
            return;
        }else {
            let response = error_function ({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(400).send(response);
            return;
        }


    } catch (error) {
        let response = error_function ({
            statusCode : 400,
            message : "Something went wrong",
        })
        console.log("error : ", error);
        res.status(400).send(response);
        return ;
    }
}

exports.getUsers = async function (req, res) {
    const UserModel = mongoose.model('users')
    try {
        const userData = await UserModel.find();
        if(userData) {
            let response = success_function ({
                statusCode : 200,
                data : userData,
                message : "Datas fetched successfully",
            })
            res.status(200).send(response);
            return;
        }else {
            let response = error_function ({
                statusCode : 400,
                message : "Failed to get Data",
            })
            res.status(400).send(response);
            return;
        }
        
    } catch (error) {
        let response = error_function ({
            statusCode : 400,
            message : "Something went wrong",
        })
        console.log("error : ", error);
        res.status(400).send(response);
        return ;
    } 
}

exports.getSingleUser = async function (req, res){

}

exports.updateUser = async function (req, res) {

}

exports.deleteUser = async function (req, res) {
    
}