const users = require ('..db/models/users');

exports.createUser = async function (req, res) {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;

        //Validations
        // if(!name) {
        //     res.status(400).send("Name is required");
        //     return;
        // }

        const new_user = new users({
            firstname : firstname,
            lastname : lastname,
            email,
            password,
        })

        const saved_user = await new_user.save();

        if(saved_user) {
            res.status(200).send("Success");
            return;
        }else {
            res.status(400).send("Failed");
            return;
        }


    } catch (error) {
        console.log("error : ", error);
        res.status(400).send("Failed");
        return;
    }
}

exports.getUsers = async function (req, res) {

}

exports.getSingleUser = async function (req, res){

}

exports.updateUser = async function (req, res) {

}

exports.deleteUser = async function (req, res) {
    
}