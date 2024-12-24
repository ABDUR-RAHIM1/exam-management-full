import jwt from 'jsonwebtoken'; // require এর বদলে import
import bcrypt from 'bcryptjs';
import usersModel from '../../model/users/usersModel.js';


// Create User
export const createUser = async (req, res) => {
    try {
        const { name, emailPhone, password, photo, collage, address } = req.body;

        // Check if user already exists with the same email
        const existingUser = await usersModel.findOne({ emailPhone });
        if (existingUser) {
            return res.status(400).json({ message: "already registered" });
        }

        // Password hashing
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new usersModel({
            name,
            emailPhone,
            password: hashedPassword,  // Store the hashed password 
            photo,
            collage,
            address
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error)
    }
};


// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await usersModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create JWT token
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET);

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User by id (logged in user)
export const getUser = async (req, res) => {
    const { userId } = req;
    try {
        const user = await usersModel.findById(userId)
            .select('-password')  // Find user and exclude password
            .populate("purchase")
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);  // Send user data
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


// Get User All (By Admin)
export const getAllUser = async (req, res) => {
    try {
        const user = await usersModel.find()
            .select('-password')
            .populate("purchase")
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);  // Send user data
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


// Update User
export const updateUser = async (req, res) => {
    try {
        const { userId } = req; // এটি authGuard থেকে আসবে
        const { id } = req.params; // URL থেকে ইউজার ID

        // শুধুমাত্র সেই ইউজার তার নিজের তথ্য আপডেট করতে পারবে
        if (userId !== id) {
            return res.status(403).json({ error: "You are not authorized to update this user" });
        }

        const updatedUser = await usersModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// Delete User
export const deleteUser = async (req, res) => {
    const { userId } = req; // এটি authGuard থেকে আসবে
    try {
        const { id } = req.params; // URL থেকে ইউজার ID

        // শুধুমাত্র সেই ইউজার তার নিজের তথ্য ডিলিট করতে পারবে
        if (userId !== id) {
            return res.status(403).json({ error: "You are not authorized to delete this user" });
        }

        const deletedUser = await usersModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

