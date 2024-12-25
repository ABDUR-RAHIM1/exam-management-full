import express from "express";
// import multer from "multer";
// import axios from "axios";
import { upload, handleUploadFile } from "../midlewere/uploadMiddleware.js";

const testRouter = express.Router();

// Multer configuration for in-memory file storage
// const upload = multer({ storage: multer.memoryStorage() });


testRouter.post("/upload", upload.single('photo'), handleUploadFile, async (req, res) => {
    try {
        res.status(200).json({ message: 'Profile image uploaded successfully', imageUrl: req.imageUrl });
    } catch (error) {
        console.log("server error", error)
    }
})


// ImgBB API Key (Replace with your actual key)
const IMG_BB_API_KEY = "862850e874b9b92bba3bbba84383b4dd";

// Route to handle file upload
// testRouter.post("/upload", upload.single("photo"), async (req, res) => {
//     console.log(req.body)
//     try {
//         // Check if file is available
//         if (!req.file) {
//             return res.status(400).json({ message: "No file uploaded!" });
//         }

//         // Convert file buffer to base64 for ImgBB API
//         const fileBase64 = req.file.buffer.toString("base64");

//         // Make the API call to ImgBB
//         const response = await axios.post("https://api.imgbb.com/1/upload", null, {
//             params: {
//                 key: IMG_BB_API_KEY,
//                 image: fileBase64,
//             },
//         });

//         // Get the URL of the uploaded image
//         const imageUrl = response.data.data.url;
//         console.log(imageUrl)
//         // Return the image URL in the response
//         res.status(201).json({ message: "File uploaded successfully", imageUrl });
//     } catch (error) {
//         console.error("Error uploading to ImgBB:", error.message);
//         res.status(500).json({ error: "Image upload failed" });
//     }
// });


// testRouter.post("/upload", upload.single("photo"), async (req, res) => {
//     try {
//         console.log("File:", req.file); // Multer দিয়ে ফাইল ডেটা প্রসেস
//         console.log("Body:", req.body); // অন্যান্য ফর্ম ডেটা

//         if (!req.file) {
//             return res.status(400).json({ error: "No file uploaded" });
//         }

//         // Create FormData for ImgBB API
//         const formData = new FormData();
//         formData.append("key", IMG_BB_API_KEY);
//         formData.append("image", req.file.buffer.toString("base64")); // Convert file buffer to Base64

//         // Upload to ImgBB
//         const response = await axios.post("https://api.imgbb.com/1/upload", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });

//         console.log("ImgBB Response:", response.data);

//         // Return the image URL from ImgBB
//         res.status(200).json({
//             message: "Image uploaded successfully",
//             imageUrl: response.data.data.url, // ImgBB থেকে পাওয়া URL
//         });
//     } catch (error) {
//         console.error("Error uploading file to ImgBB:", error.message);
//         res.status(500).json({ error: "File upload failed" });
//     }
// });

export default testRouter;
