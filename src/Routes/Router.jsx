import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import TopGames from "../Pages/TopGames/TopGames";
import Games from "../Pages/Games/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "games",
        element:<Games></Games>,
      },
      {
        path: "top-games",
        element: <TopGames />,
      }
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;