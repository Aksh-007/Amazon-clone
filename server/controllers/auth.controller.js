import userSchema from "../models/user.schema.js";
import { comparePassword, hashpassword } from '../helpers/auth.helper.js'
import JWT from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;


/******************************************************
 * @REGISTER
 * @method "POST"
 * @route http://localhost:8080/api/v1/register
 * @description User signUp/register Controller for creating new user
 * @parameters name, email, password, phone, address, role
 * @returns User Object
 ******************************************************/
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body

        //validation
        if (!name) {
            throw new Error("Name is required");
        }

        // checking email already exists
        const existingUser = await userSchema.findOne({ email })
        if (existingUser) {
            throw new Error('Email already exists');
        }

        if (!email) {
            throw new Error("Email is required");
        }

        if (!password) {
            throw new Error("password is required");
        }

        if (!phone) {
            throw new Error("Phone number is required");
        }

        // existing Phone number
        const existingPhone = await userSchema.findOne({ phone })
        if (existingPhone) {
            throw new Error("Contact already exist ")
        }

        if (!address) {
            throw new Error("Address is required");
        }

        //register user 
        const hashedPassword = await hashpassword(password);
        //saving the user
        const user = await new userSchema({ name, email, password: hashedPassword, phone, address }).save();

        res.status(201).json({
            success: true,
            message: `User Registerd Succesfully`,
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess: false,
            message: `Error while Registering user ${error.message}`,
        })
    }
}


/******************************************************
 * @LOGIN
 * @method "POST"
 * @route http://localhost:8080/api/v1/login
 * @description User login controller 
 * @parameters name, email, password 
 * @returns User Object
 ******************************************************/
export const loginController = async (req, res) => {

    try {
        const email = req.body.email
        const password = req.body.password
        //validaion
        if (!email) {
            throw new Error(`Please add Email`)
        }

        if (!password) {
            throw new Error(`Please enter Password`)
        }

        //check user
        const user = await userSchema.findOne({ email });
        if (!user) {
            throw new Error(`Email is not registerd`)
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            throw new Error(`Invalid Password `)
        }

        //token creat
        const token = await JWT.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            success: true,
            message: `Login Succesfull`,
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: 'false',
            message: `Error while login ${error.message}`
        })
    }
}


export const testController = async (req, res) => {
    res.send(`Succesfully setup JWT token  `)
}