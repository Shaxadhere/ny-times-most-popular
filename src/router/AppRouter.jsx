import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ArticleDetails from "../pages/ArticleDetails";
import Layout from "../components/layout";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <ArticleDetails />,
      },
    ]
  }
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter