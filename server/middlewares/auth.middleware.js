import JWT from 'jsonwebtoken'
import userSchema from '../models/user.schema.js';

//Protected route token based

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error while comparing token ${error.message}`
        })
    }
}

//  Admin middlewre

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userSchema.findById(req.user._id)
        if (user.role !== 1) {
            res.status(401).json({
                success: false,
                message: `UnAuthorize User`
            })
        }
            next();

    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: `Error in isAdmin middleware ${error.message}`
        })
    }
}