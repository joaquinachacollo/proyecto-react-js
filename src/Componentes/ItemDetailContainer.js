import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"
import { item as itemMock } from "../mocks/item.mock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemMock.find((item) => item.id === id))
            }, 1000)
        }).then((data) => setItem(data))
    },[id])


    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer