// courseModel.js
import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    startDate: { type: Date, required: true },

}, { timestamps: true });

export default mongoose.model('Course', courseSchema);

