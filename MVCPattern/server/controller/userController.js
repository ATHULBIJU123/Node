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
            let response = error_function ({
                statusCode : 401,
                message : "First Name is required"
            });

            res.status(400).send(response);
            return;
        }

        else if (!lastname){
            let response = error_function ({
                statusCode : 401,
                message : "Last Name is required"
            });

            res.status(400).send(response);
            return;
        }
        else if (!email){
            let response = error_function ({
                statusCode : 401,
                message : "Email is required"
            });

            res.status(400).send(response);
            return;
        }
        else if (!password) {
            let response = error_function ({
                statusCode : 401,
                message : "Password Name is required"
            });

            res.status(400).send(response);
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


        let firstname_regexp = /^[A-Z]([a-zA-Z]{2,30})?$/;

        let validFirstName = firstname_regexp.test(firstname);
        console.log("validity of firstname: ", validFirstName);

        if(!validFirstName) {
            let response = error_function ({
                statusCode : 401,
                message : "First name is invalid"
            });

            res.status(400).send(response);
            return;
        }

        if(firstname.length < 2){
            let response = error_function ({
                statusCode : 401,
                message : "Firstname is too short"
            });

            res.status(400).send(response);
            return;
        }
        if(firstname.length > 30){
            let response = error_function ({
                statusCode : 401,
                message : "Firstname is too long"
            });

            res.status(400).send(response);
            return;
        }


        let lastname_regexp = /^[A-Z]([a-zA-Z]{2,30})?$/;
        let validLastName = lastname_regexp.test(lastname);
        console.log("validity of firstname: ", validLastName);

        if(!validLastName) {
            let response = error_function ({
                statusCode : 401,
                message : "Last name is invalid"
            });

            res.status(400).send(response);
            return;
        }

        if(lastname.length < 2){
            let response = error_function ({
                statusCode : 401,
                message : "Lasstname is too short"
            });

            res.status(400).send(response);
            return;
        }
        if(lastname.length > 30){
            let response = error_function ({
                statusCode : 401,
                message : "Lastname is too long"
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
    try {
        const userId = req.params.id;
        
        if (!userId) {
            let response = error_function ({
                statusCode : 401,
                message : "User Id is required"
            });

            res.status(400).send(response);
            return;
        }

        const user = await users.findById(userId);

        if (!user) {
            let response = error_function ({
                statusCode : 401,
                message : "User not found"
            });

            res.status(400).send(response);
            return;
        }

        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        };

        let response = success_function({
            statusCode: 200,
            data: userData,
            message: "User found successfully",
        })
        res.status(200).send(response);

    } catch (error) {
        let response = error_function({
            statusCode: 500,
            message: "Internal Server Error",
        })
        res.status(500).send(response);
    }
}

console.log("\n")

exports.updateUser = async function (req, res) {
    try {
        const userId = req.body.id; 
        //find a user using this id, if user not exists give error response
        // const updatedData = req.body
        console.log("req.body :",req.body)
        // Validation
        if (!userId) {
            let response = error_function ({
                statusCode : 401,
                message : "User Id is required"
            });
            res.status(400).send(response);
            return;
        }


        const user = await users.findOneAndUpdate({_id : req.body.id},{
            firstName : req.body.firstname,
            lastName : req.body.lastname,
            email : req.body.email,
        },{
            upsert: true // Make this update into an upsert
          });
        
          console.log("user :", user);

        if (!user) {
            res.status(404).send("User not found");
            return;
        }
        else {
            res.status(200).send("User updated Succesfully")
            return;
        }

    } catch (error) {
        let response = error_function({
            statusCode: 500,
            message: "Internal Server Error",
        })
        res.status(500).send(response);
    }
}


exports.deleteUser = async function(req, res) {
    try {
        const userId = req.params.id;

        // Validation
        if (!userId) {
            let response = error_function ({
                statusCode : 401,
                message : "User Id is required"
            });

            res.status(400).send(response);
            return;;
        }

        const user = await users.findById(userId);

        if (!user) {
            let response = error_function ({
                statusCode : 401,
                message : "User not found"
            });

            res.status(400).send(response);
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
