import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './route/users/userRoute.js';
import testRouter from './Test/TestFileUplaod.js';
import blogRouter from './route/users/blogRoute.js';
import purchesRouter from './route/users/purchaseRoute.js';
import adminRouter from './route/admin/adminAuthRoute.js';
import courseRouter from './route/admin/adminCourseRoute.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to the API Home Page!");
});


// test routes
app.use("/api/test", testRouter)


// User Routes
app.use("/api/user", userRouter);
app.use("/api/user", blogRouter);
app.use("/api/user", purchesRouter)

// admin course route
app.use("/api/admin/auth", adminRouter);

app.use("/api/admin/course", courseRouter)

// Handle undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        message: "The requested route does not exist on the server.",
    });
});


export default app;   
