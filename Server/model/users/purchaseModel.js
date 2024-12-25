import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: Array, required: true },
    purchaseDate: { type: Date, default: Date.now },
    paymentStatus: { type: Boolean, required: true },
    isEnrolled: { type: Boolean, default: true },
    isCompleted: { type: Boolean, default: false },
}, { timestamps: true });


export default mongoose.model("Purchase", purchaseSchema);
