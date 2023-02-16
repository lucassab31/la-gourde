import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Smoothies, { smoothiesLoader } from "../pages/Smoothies/Smoothies";
import SmoothieDetails, {
  smoothieLoader,
} from "../pages/SmoothieDetails/SmoothieDetails";
import Cart from "../pages/Cart/Cart";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Commande from "pages/Commande/Commande";
import Recap from "pages/Recap/Recap";
import Personalizer from "pages/Personalizer/Personalizer";

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
              loader: smoothieLoader,
            },
            {
              path: "/panier",
              element: <Cart />,
            },
            {
              path: "/personnaliser",
              element: <Personalizer />,
            },
            {
              path: "/commande",
              element: <Commande />,
            },
            {
              path: "/recap",
              element: <Recap />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
