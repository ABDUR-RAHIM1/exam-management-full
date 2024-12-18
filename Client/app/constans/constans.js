
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
export {
    // public start
    publicCourseGet,
    // public end

    // user start 
    purchaseCourseAll, purchaseCourseMe,
    // user end 


    adminLogin, adminCreateCourse, courseDelete
}
