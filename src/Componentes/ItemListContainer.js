import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock";

const ItemListContainer = () => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(item)
            }, 3000)
        }).then((data) => setproducts(data))
    },[])

    return(
        <>
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer