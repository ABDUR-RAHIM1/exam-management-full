import express from "express";
// import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../controller/users/blogControler.js";
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../../controller/users/blogControler.js"
import authGuard from "../../midlewere/authGuard.js";

const router = express.Router();


router.post("/blogs", authGuard, createBlog);
router.get("/blogs", getAllBlogs);  // the route for admin (public)
router.get("/blog/me", authGuard, getBlogById);
router.put("/blogs/:id", authGuard, updateBlog);
router.delete("/blogs/:id", authGuard, deleteBlog);

export default router;
