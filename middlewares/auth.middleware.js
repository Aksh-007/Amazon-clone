import JWT from 'jsonwebtoken'

//Protected route token based

export const requireSign = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: `Error while comparing token ${error.message}`
        })
    }
}