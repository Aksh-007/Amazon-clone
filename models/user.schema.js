import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: [20, "Name must not exceed more than 20 charcter"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        unique: [true, "Number already exist"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    role: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }

);

export default mongoose.model('User', userSchema);