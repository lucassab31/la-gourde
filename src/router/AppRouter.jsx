import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Smoothies, { smoothiesLoader } from "../pages/Smoothies/Smoothies";
import SmoothieDetails, { smoothieLoader } from "../pages/SmoothieDetails/SmoothieDetails";
import Cart from "../pages/Cart/Cart";
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
              loader: smoothiesLoader,
            },
            {
              path: "/smoothie/:id",
              element: <SmoothieDetails />,
              loader: smoothieLoader,
            },
            {
                path: "/panier",
                element: <Cart />,
            }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
