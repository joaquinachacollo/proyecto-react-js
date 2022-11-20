import {createBrowserRouter} from "react-router-dom"
import ItemListContainer from "../Componentes/ItemListContainer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ItemListContainer/>,
    },
    //{},
    //{}
])