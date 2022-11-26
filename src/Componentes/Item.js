import catalogo from "../styles/catalogo.css"
import {Link} from "react-router-dom"
const Item = ({ product }) => {
    return(
        <div className="container-main">
            <img className="img-catalogo" src={product.img}></img>
            <h3 className="titulo-catalogo">{product.name}</h3>
            <h4 className="precio-catalogo">{product.precio}</h4>
            <Link to={`/item/${product.id}`}><button className="boton-catalogo">Ver Detalle</button></Link>
        </div>
    )
}

export default Item