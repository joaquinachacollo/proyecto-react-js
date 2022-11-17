import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"
import { item as itemMock } from "../mocks/item.mock"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemMock[0])
            }, 3000)
        }).then((data) => setItem(data))
    },[])


    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer