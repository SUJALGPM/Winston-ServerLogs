const express = require('express');
const { userRegister } = require('../Controllers/UserController');
const router = express.Router();




/************************POST METHODS****************************/
router.post("/register", userRegister);








module.exports = router;