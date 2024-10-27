import userModel from '../models/userModel.js';
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
import validator from 'validator'
import { Error } from 'mongoose';

//login user

const loginUser = async (req, res) => {

    const {email, password} = req.body
    const user = await userModel.findOne({ email: email });
    try {
        if (!user) {
            return res.json({ success: false, message: "User does not exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" })
        }
        const token = createToken(user._id);
        res.json({ success: true, token })
    }
    catch (error) {

    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); // Change made here

        // Creating new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        console.log(user);

        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: Error });
    }
}

export { loginUser, registerUser }