import userSchema from "../models/user.schema.js";



export const registerController = async (req, res) => {
    try {
        // const { name }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            sucess: false,
            message: error.message
        })
    }
}