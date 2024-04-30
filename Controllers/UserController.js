const userModel = require("../Models/UserModel");
const { logger } = require("../Bucket/Logger");

//User register...
const userRegister = async (req, res) => {
    try {
        const { USERNAME, USERID, PASSWORD, ROLE, LOCATION } = req.body;

        //Check field empty or not...
        if (!USERNAME || !USERID || !PASSWORD || !ROLE || !LOCATION) {
            res.status(501).send({ message: "PLZ FILL ALL DETAILS..!!!", success: false });
        }

        //Cleanup data before store...
        const formated = {
            userName: USERNAME,
            userId: USERID,
            password: PASSWORD,
            role: ROLE,
            location: LOCATION
        }

        //Store in database...
        const newUser = new userModel(formated);
        await newUser.save();


        res.status(201).send({ message: `New user ${USERNAME} account is created..`, success: true });
    } catch (err) {
        logger.error('Error occurred during user registration:', err);
        res.status(501).send({ message: "Failed to create new user..!!", success: false });
    }
}














module.exports = { userRegister }