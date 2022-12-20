import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Cart from "../Componentes/Cart"
import Checkout from "../Componentes/Checkout"
import Category from "../views/category"
import Item from "../views/item"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/category/:category",
        element: <Category/>,
    },
    {
        path: "/item/:id",
        element: <Item/>,
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    }
])