import bcrypt from "bcrypt";

// For hashing password using bcrypt
export const hashpassword = async (password) => {
    try {
        // 
        const saltRound = 10;
        const hashedpassword = await bcrypt.hash(password, saltRound)
        return hashedpassword;
    } catch (error) {
        console.log(`Error in hashing password ${error.message}`);
    }
}


export const comparePassword = async (password, hashedpassword) => {

    try {
        return bcrypt.compare(password, hashedpassword);
    } catch (error) {
        console.log(`Error in comparing hashed password ${error.message}`)
    }
};  