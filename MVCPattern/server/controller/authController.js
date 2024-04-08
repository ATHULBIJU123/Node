const succes_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
let users = require('../db/models/users');
const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken')
let dotenv = require('dotenv');
dotenv.config();

exports.login = async function (req, res) {
    try {
        console.log("Reached here...");

        let email = req.body.email;
        console.log("email", email);
        let password = req.body.password;
        console.log("password", password);

        let user = await users.findOne((email));
        console.log("user:", user);

        if (!user) {
            let response = error_function({
                statusCode: 404,
                message: "User not found",
            });

            return res.statuCode(response.statusCode).send(response);
        }

        let db_password = user.password;
        console.log("db_password: ", db_password);

        if (bcrypt.compareSync(password, db_password)) {

            //Generating JWT token

            let jwt_token = jwt.sign({ user_id: user._id }, process.env.PRIVATE_KEY);
            console.log("jwt_token", jwt_token);

            let response = success_function({
                statusCode: 200,
                data: jwt_token,
                message: "Login successful",
            });

            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode: 400,
                message: "Login failed"
            });

            return res.status(response.statusCode).send(response);
        }

    } catch (error) {
        console.log("error: ", error);
        let response = error_function({
            statuCode: 400,
            message: error.message ? error.message : error,
        });
        res.status(response.statusCode).send(response);
        return;

    }
}