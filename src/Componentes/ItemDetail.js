import "../styles/detalle.css"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"
import { Context } from "../context/CartContextProvider"

const ItemDetail = ({item}) => {
    const {addItem} = useContext(Context)
    const [count, setCount] = useState(1);
    const [stockActual, setStockActual] = useState(item.stock);
    const cantidadMax = stockActual;

    function cantidadAgregar(type) {
        if (type === "mas" && count < cantidadMax) {
            setCount(count + 1)
        }
        if (type === "menos" && count > 1) {
            setCount(count - 1)
        }
    }

    function verificar() {
        if (stockActual < count) {
            alert("no hay suficiente stock de este producto")
        }
        else{
            setStockActual(stockActual - count)
            addItem(item, count)
        }
    }


    return(
        <>
            <div className="container-detalle">
                <img className="img-detalle" src={item.img}></img>
                <div className="nombre-detalle">{item.name}</div>
                <div className="descripcion">{item.descripcion}</div>
                    <div className="container-det">
                        <h4 className="precio">Precio: {item.precio}</h4>
                        {stockActual > 0 && (
                            <h4 className="stock">En Stock: {stockActual}</h4>
                        )}
                        {stockActual > 0 ? (
                            <ItemCount count={count} cantidadAgregar={cantidadAgregar}/>
                        ) : (
                        <span>Sin stock</span>
                        )}
                        <button className="boton-agregar" onClick={verificar} disabled= {stockActual === 0}>Agregar al carrito</button>
                        <Link to="/cart"><button className="boton-final">Finalizar compra</button></Link>
                    </div>
            </div>
        </>
    )
}

export default ItemDetail