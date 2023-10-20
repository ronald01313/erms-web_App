import mongoose from "mongoose";

const bookAnEventUserSchema = new mongoose.Schema({

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

    isAttendee: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyTokenExpiry: Date,


})

const bookAnEventUser = mongoose.models.bookAnEventUser || mongoose.model
("bookAnEventUser", bookAnEventUserSchema);

export default bookAnEventUser;

