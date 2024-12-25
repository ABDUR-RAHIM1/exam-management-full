
export const API_URL = "http://localhost:8500/api";

// public (no token)
const publicCourseGet = "/admin/course/all"

/// user (use token)
const getMyProfileInfo = "/user/me"
const purchaseCourseAll = "/user/purchase"  // admin dashboard - page -(course/purchase)
const purchaseCourseMe = "/user/purchase/me"
const getMyblog = "/user/blog/me";
const putBlogStatus = "/user/blog/status/"
const deleteBlog = "/user/blogs/"

// admins 
const adminLogin = "/admin/auth/login"   // course/add (page)
const adminCreateCourse = "/admin/course/create"  // admin-auth (page)
const courseDelete = "/admin/course/delete/"
const questionAdd = "/admin/question/add"
const questionGetAll = "/admin/question/all"
const questionDetailsById = "/admin/question/details/"
const questionDelete = "/admin/question/delete/"


// result / questions
const getResultAll = "/results/get/all"
const getResultMe = "/results/get/me"
const getResultById = "/results/get/"


export {
    // public start
    publicCourseGet,
    // public end

    // user start 
    getMyProfileInfo, purchaseCourseAll, purchaseCourseMe, getMyblog, putBlogStatus, deleteBlog,
    // user end 


    adminLogin,
    adminCreateCourse,
    courseDelete,
    questionAdd,
    questionGetAll,
    questionDetailsById,
    questionDelete,


    /// results / questions
    getResultAll, getResultMe, getResultById

}
