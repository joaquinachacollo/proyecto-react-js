import Main from "../styles/Main.css"

const Item = ({ product }) => {
    return(
        <div className="container-main">
            <img className="img-catalogo" src={product.img}></img>
            <h3 className="titulo-catalogo">{product.name}</h3>
            <button className="boton-catalogo">Ver Detalle</button>
        </div>
    )
}

export default Item