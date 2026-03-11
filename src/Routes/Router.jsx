import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/games",
        element: <div>Games</div>
      },
      {

      }
    ]
  },
  {

  }
])

export default router;