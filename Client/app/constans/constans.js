
export const API_URL = "http://localhost:8500/api";

// public
const publicCourseGet = "/admin/course/all"

// admins 
const adminLogin = "/admin/auth/login"   // courser/add (page)
const adminCreateCourse = "/admin/course/create"  // admin-auth (page)

export {
    // public start
    publicCourseGet,
    // public end
    adminLogin, adminCreateCourse
}
