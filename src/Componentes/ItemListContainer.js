import { useState, useEffect } from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch("/data.json")
        .then((data) => data.json())
        .then((data) => setproducts(data))
    },[])

    return(
        <>
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer