// adminCourseController.js

import adminCourseModel from "../../model/admin/adminCourseModel.js";


// নতুন কোর্স তৈরি করা
export const createCourse = async (req, res) => {
    try {
        const { category, title, description, price, duration, startDate } = req.body;

        // Check if the course with the same title already exists
        const existingCourse = await adminCourseModel.findOne({ title });
        if (existingCourse) {
            return res.status(400).json({ message: 'Course with this title already exists' });
        }

        const newCourse = new adminCourseModel({
            category,
            title,
            description,
            price,
            duration,
            startDate
        });

        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


// সব কোর্স দেখানো
export const getCourses = async (req, res) => {
    try {
        const courses = await adminCourseModel.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// কোর্স আপডেট করা
export const updateCourse = async (req, res) => {
    try {
        const { courseId } = req.params;

        const updatedCourse = await adminCourseModel.findByIdAndUpdate(
            courseId,
            req.body,
            { new: true }
        );

        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });

        res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// কোর্স ডিলিট করা
export const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;

        const deletedCourse = await adminCourseModel.findByIdAndDelete(courseId);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
