import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailPhone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: "" },
    collage: { type: String },
    address: { type: String },
    isPayment: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
