import App from "App";
//import Contact from "pages/Contact/Contact";
//import Home from "pages/Home/Home";
//import ProductDetails from "pages/ProductDetails/ProductDetails";
//import Products, { productsLoader} from "pages/Products/Products";
import { productLoader } from "pages/ProductDetails/ProductDetails";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Cart from "pages/Cart/Cart";



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
                            element : <Home />
                        },
                        {
                            path: "/contact",
                            element: <Contact />,
                        },
                        {
                            path: "/produits",
                            element: <Products />,
                            loader: productsLoader,
                        },
                        {
                            path: "/produits/:id",
                            element: <ProductDetails />,
                            loader : productLoader,
                        },
                        {
                            path: "/panier",
                            element: <Cart />,
                        }
                    ]
                }
            ]
        }
    ])
    return (<RouterProvider router={router} />);
}

export default AppRouter;

