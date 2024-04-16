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
        if(!firstname) {
            res.status(400).send("First Name is required");
            return;
        }
        else if (!lastname){
            res.status(400).send("Last Name is required");
            return;
        }
        else if (!email){
            res.status(400).send("Email is required");
            return;
        }
        else if (!password) {
            res.status(400).send("Password is required");
            return;
        }

        let email_count = await users.countDocuments({email});

        if(email_count >0) {

            let response = error_function ({
                statusCode : 401,
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
            password : hashed_password,
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
                message: "Failed to get Data",
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

console.log("\n")

exports.getSingleUser = async function (req, res){
    // console.log("Single User");
    try {
        const userId = req.params.id;
        
        if (!userId) {
            res.status(400).send("User ID is required");
            return;
        }

        const user = await users.findById(userId);

        if (!user) {
            res.status(404).send("User not found");
            return;
        }

        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        };

        let response = {
            statusCode: 200,
            data: userData,
            message: "User found successfully",
        };

        res.status(200).send(response);
    } catch (error) {
        let response = {
            statusCode: 500,
            message: "Internal Server Error",
        };
        console.log("error : ", error);
        res.status(500).send(response);
    }
}

console.log("\n")

exports.updateUser = async function (req, res) {
    try {
        const userId = req.body.id; 
        // const updatedData = req.body
        console.log("req.body :",req.body)
        // Validation
        if (!userId) {
            res.status(400).send("User ID is required");
            return;
        }

        // if (!updatedData) {
        //     res.status(400).send("Updated data is required");
        //     return;
        // }
        const user = await users.findOneAndUpdate(req.body);
        
        if (!user) {
            res.status(404).send("User not found");
            return;
        }
 
        const updatedUser = await user.save();
        
        const userData = {
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            password : updatedUser.password
        };
        
        // console.log("Reached Here..")
        let response = {
            statusCode: 200,
            data: userData,
            message: "User updated successfully",
        };

        res.status(200).send(response);
    } catch (error) {
        let response = {
            statusCode: 500,
            message: "Internal Server Error",
        };
        console.log("error : ", error);
        res.status(500).send(response);
    }
}


exports.deleteUser = async function(req, res) {
    try {
        const userId = req.params.id;

        // Validation
        if (!userId) {
            res.status(400).send("User ID is required");
            return;
        }

        const user = await users.findById(userId);

        if (!user) {
            res.status(404).send("User not found");
            return;
        }

        await users.findByIdAndDelete(userId);

        let response = {
            statusCode: 200,
            message: "User deleted successfully",
        };

        res.status(200).send(response);
    } catch (error) {
        let response = {
            statusCode: 500,
            message: "Internal Server Error",
        };
        console.log("error : ", error);
        res.status(500).send(response);
    }
}
