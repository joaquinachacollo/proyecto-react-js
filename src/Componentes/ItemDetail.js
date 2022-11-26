import detalle from "../styles/detalle.css"
const ItemDetail = ({item}) => {
    return(
        <>
            <div className="container-detalle">
                <img className="img-detalle" src={item.img}></img>
                <div className="nombre-detalle">{item.name}</div>
                <div className="descripcion">{item.descripcion}</div>
                    <div className="container-det">
                        <h4 className="stock">Stock: {item.stock}</h4>
                        <h4 className="precio">{item.precio}</h4>
                        <button className="boton-detalle">Comprar</button>
                    </div>
            </div>
        </>
    )
}

export default ItemDetail