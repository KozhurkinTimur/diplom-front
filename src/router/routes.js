import Admin from "../pages/admin";
import Auth from "../pages/auth";
import Course from "../pages/course";
import Courses from "../pages/courses";
import Glav from "../pages/glav";

export const publicRouters = [
    {
        path: '/',
        Component: Glav,
    },
    {
        path: '/auth',
        Component: Auth,
    },
]

export const authRouters = [
    {
        path: '/courses',
        Component: Courses,
    },
    {
        path: '/course/:id',
        Component: Course,
    },
]

export const adminRouters = [
    {
        path: '/admin',
        Component: Admin,
    },
]