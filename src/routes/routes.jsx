import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notFound/NotFound";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import LoginMain from "../pages/login/LoginMain";
import DashboardMain from "../pages/dashboard/DashboardMain";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import BlogsMain from "../pages/blogs/BlogsMain";
import BlogManagement from "../pages/dashboard/blogManage/BlogManagement";
import SkillManagement from "../pages/dashboard/skillManage/skillManagement";
import ProjectManagement from "../pages/dashboard/projectManage/projectManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projectDetails/:id",
    element: <ProjectDetails />,
  },
  {
    path: "blogs",
    element: <BlogsMain />,
  },
  {
    path: "blogDetails/:id",
    element: <BlogDetails />,
  },
  {
    path: "login",
    element: <LoginMain />,
  },
  {
    path: "dashboard",
    element: <DashboardMain />,
  },

  {
    path: "dashboard/skill-management",
    element: <SkillManagement />,
  },
  {
    path: "dashboard/project-management",
    element: <ProjectManagement />,
  },
  {
    path: "dashboard/blog-management",
    element: <BlogManagement />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
