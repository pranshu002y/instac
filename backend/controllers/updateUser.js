const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


const updateUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const { name, userName, email, password, gender, bio, privateAccount, ppLink } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        // If user not found, return an error
        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }

        // Update user fields
        user.name = name || user.name;
        user.userName = userName || user.userName;
        user.email = email || user.email;
        user.gender = gender || user.gender;
        user.bio = bio || user.bio;
        user.privateAccount = privateAccount !== undefined ? privateAccount : user.privateAccount;
        user.ppLink = ppLink || user.ppLink;

        // If a new password is provided, update the password
        if (password) {
            if (password.length < 6 || password.length > 23) {
                res.status(400);
                throw new Error("Password must be between 6 and 23 characters");
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            user.password = hashedPassword;
        }

        // Save the updated user to the database
        const updatedUser = await user.save();

        // Return the updated user details
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            userName: updatedUser.userName,
            email: updatedUser.email,
            gender: updatedUser.gender,
            privateAccount: updatedUser.privateAccount,
            ppLink: updatedUser.ppLink,
            bio: updatedUser.bio,
        });
    } catch (error) {
        res.status(400).json({ message: "Unable to update user details", error: error.message });
    }
});

module.exports = {updateUser};