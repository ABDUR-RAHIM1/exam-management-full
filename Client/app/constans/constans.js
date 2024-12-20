
export const API_URL = "http://localhost:8500/api";

// public (no token)
const publicCourseGet = "/admin/course/all"

/// user (use token)
const purchaseCourseAll = "/user/purchase"  // admin dashboard - page -(course/purchase)
const purchaseCourseMe = "/user/purchase/me"


// admins 
const adminLogin = "/admin/auth/login"   // course/add (page)
const adminCreateCourse = "/admin/course/create"  // admin-auth (page)
const courseDelete = "/admin/course/delete/"
const questionAdd = "/admin/question/add"
const questionGetAll = "/admin/question/all"
const questionDetailsById = "/admin/question/details/"
const questionDelete = "/admin/question/delete/"


// result / questions
const getResultMe = "/results/get/me"
const getResultById = "/results/get/"


export {
    // public start
    publicCourseGet,
    // public end

    // user start 
    purchaseCourseAll, purchaseCourseMe,
    // user end 


    adminLogin,
    adminCreateCourse,
    courseDelete,
    questionAdd,
    questionGetAll,
    questionDetailsById,
    questionDelete,


    /// results / questions
    getResultMe, getResultById

}
