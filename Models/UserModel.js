const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    userName: String,
    userId: String,
    password: String,
    role: String,
    location: String,
    Date: {
        type: String,
        default: () => {
            const currentDate = new Date();
            const day = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
            const year = currentDate.getFullYear();
            return `${day}/${month}/${year}`;
        }
    },
    Time: {
        type: String,
        default: () => {
            const currentTime = new Date();
            const hours = currentTime.getHours().toString().padStart(2, '0');
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const seconds = currentTime.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }
    }
});


const userModel = mongoose.model('Users', UserModel);


module.exports = userModel;