import { App } from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Smoothies from "../pages/Smoothies/Smoothies";
import SmoothieDetails from "../pages/SmoothieDetails/SmoothieDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/smoothies",
              element: <Smoothies />,
            },
            {
              path: "/smoothie/:id",
              element: <SmoothieDetails />,
            },
            // {
            //     path: "/panier",
            //     element: <Cart />,
            // }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
