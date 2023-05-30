const jwt = require("jsonwebtoken");
const User = require("../models/User");

// @desc Create a login API. Generate a token when user get login
// @route POST /login
const login = async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: "Must have username and password" });
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: "User not exist" });
        }

        const token = jwt.sign({ user: user.username }, "JWT_KEY", { expiresIn: "15m" });

        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { login };