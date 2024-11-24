const user = require("../models/user");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user in database
        const foundUser = await user.findOne({ email, password });

        if (!foundUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            user: foundUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error logging in",
            error: error.message,
        });
    }
};

const registerContoller = async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            user: newUser,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error registering user",
            error: error.message,
        });
    }
};

module.exports = { loginController, registerContoller };
