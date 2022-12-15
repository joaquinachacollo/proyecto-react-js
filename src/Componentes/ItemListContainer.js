import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {item} from "../mocks/item.mock";
import {useParams} from "react-router-dom"

const ItemListContainer = () => {

    const {category} = useParams();
    
    const [products, setproducts] = useState([])

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(item)
            }, 2000)
        }).then((data) => {
            if (category) {
                const categories = data.filter(product => product.category === category)
                setproducts(categories)
            } 
            else {
                setproducts(data)
            }
        })
    },[category])

    return(
        <>          
            <ItemList products={products}/>
        </>
    );
}

export default ItemListContainer