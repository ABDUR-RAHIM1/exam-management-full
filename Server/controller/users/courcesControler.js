// courseController.js
import User from '../model/usersModel.js';

export const purchaseCourse = async (req, res) => {
    try {
        const { userId } = req;  
        const { title, description, price } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const alreadyPurchased = user.courses.some(course => course.title === title);
        if (alreadyPurchased) return res.status(400).json({ message: 'You already own this course' });

       
        const newCourse = {
            title,
            description,
            price,
            purchaseDate: new Date(),
            status: 'active',
        };

        user.courses.push(newCourse);  
        await user.save();

        res.status(201).json({ message: 'Course purchased successfully', course: newCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
