import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notFound/NotFound";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import LoginMain from "../pages/login/LoginMain";
import DashboardMain from "../pages/dashboard/DashboardMain";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import BlogsMain from "../pages/blogs/BlogsMain";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
