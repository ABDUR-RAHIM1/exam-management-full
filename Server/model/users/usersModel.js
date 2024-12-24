import mongoose, { Mongoose } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    emailPhone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, default: "" },
    collage: { type: String },
    address: { type: String },
    role: { type: String, default: "user" },
    isPayment: { type: Boolean, default: false },
    purchase: { type: mongoose.Schema.Types.ObjectId, ref: "Purchase" }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
