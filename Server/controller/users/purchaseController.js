
import mongoose from "mongoose";
import purchaseModel from "../../model/users/purchaseModel.js";

// Create a new purchase record
export const createPurchase = async (req, res) => {
    try {
        const { userId } = req;
        const { course, paymentStatus } = req.body; 

        // Extract titles from new courses
        const newCourseTitles = course.map(c => c.title);

        const purchasedCourses = await purchaseModel.find({ user: userId });

        const existingTitles = [];

        purchasedCourses.forEach(element => {
            element.course.forEach(allCorces => {
                if (allCorces.title) {
                    existingTitles.push(allCorces.title)
                }
            });
        });


        const matchingTitles = newCourseTitles.filter(title => existingTitles.includes(title));

        if (matchingTitles.length > 0) {
            return res.status(400).json({ message: `You have already purchased the following courses: ${matchingTitles.join(', ')}` });
        }

        // Proceed with creating the purchase
        const newPurchase = new purchaseModel({
            course,
            user: userId,
            paymentStatus,
        });

        await newPurchase.save();
        res.status(201).json({ message: "Purchase successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the purchase" });
    }
};



// Get all purchases (for admin)
export const getAllPurchases = async (req, res) => {
    try {
        const purchases = await purchaseModel.find().populate("user", "name emailPhone address"); // Populating user details
        res.status(200).json(purchases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving purchases" });
    }
};

// Get a specific purchase by ID (for user , who purchese this)
export const getPurchaseById = async (req, res) => {
    try {
        const { userId } = req;

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const purchase = await purchaseModel.find({ user: userId })
            .populate("user", " name emailPhone address");
        if (!purchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        res.status(200).json(purchase);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while retrieving the purchase" });
    }
};

// Update a purchase (e.g., marking as completed)
export const updatePurchase = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const updatedPurchase = await purchaseModel.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!updatedPurchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        res.status(200).json({ message: "Purchase updated successfully", data: updatedPurchase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the purchase" });
    }
};

// Delete a purchase
export const deletePurchase = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid purchase ID" });
        }

        const deletedPurchase = await purchaseModel.findByIdAndDelete(id);

        if (!deletedPurchase) {
            return res.status(404).json({ message: "Purchase not found" });
        }

        res.status(200).json({ message: "Purchase deleted successfully", data: deletedPurchase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting the purchase" });
    }
};



