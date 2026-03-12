import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import TopGames from "../Pages/TopGames/TopGames";
import Games from "../Pages/Games/Games";
import GameDetails from "../Pages/GameDetails/GameDetails";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Pages/ForgetPassword/ForgotPassword";

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
        element: <Games />,
      },
      {
        path: "top-games",
        element: <TopGames />,
      },

      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "game/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/games.json");
          const data = await res.json();
          return data.find((game) => game.id === params.id);
        },
      },
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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;