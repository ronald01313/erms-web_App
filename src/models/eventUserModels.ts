import mongoose from "mongoose";

const eventUserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Please provide a password"],

    },
    isVerified: {
        type: Boolean,
        default: false,
    },

    isEventOrganizer: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,


})

const User = mongoose.models.users || mongoose.model
("users", eventUserSchema);

export default User;