import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import ContentList from "../pages/Dashboard/ContentList";
import Write from "../pages/Dashboard/Write";
import Blog from "../pages/Main/Blog";
import List from "../pages/Main/List";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../pages/Main/Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "reading-history",
        element: <List />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <ContentList />,
      },
      {
        path: "write",
        element: <Write />,
      },
    ],
  },
]);

export default routes;
