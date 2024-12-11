import Blog from "../../model/users/blogModel.js";



// Create a new blog
export const createBlog = async (req, res) => {
    try {
        const { userId } = req;
        const {title, description, photo } = req.body;

        const newBlog = new Blog({ title, description, photo, user: userId });
        await newBlog.save();

        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        res.status(500).json({ message: "Failed to create blog", error: error.message });
    }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate("user", "name")
            .sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
    }
};

// Get a single blog by ID (login users blog)
export const getBlogById = async (req, res) => {
    try {
        const { userId } = req;
        const blog = await Blog.find({ user: userId })
        .populate("user" , "name")
        .sort({ createdAt: -1 })

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch blog", error: error.message });
    }
};

// Update a blog
export const updateBlog = async (req, res) => {
    try {
        const { userId } = req;
        const { id } = req.params;
        // const { description, photo } = req.body;

        const isUserBlog = await Blog.findOne({ _id: id, user: userId });
        if (!isUserBlog) {
            return res.status(403).json({ message: "Unauthorized to update this blog" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: "Failed to update blog", error: error.message });
    }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete blog", error: error.message });
    }
};
