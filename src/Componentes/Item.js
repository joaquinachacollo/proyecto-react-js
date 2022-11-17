import Main from "../styles/Main.css"


const Item = ({ product }) => {
    return(
        <>
            <div className="fondo">
                <div className="container-main">
                    <img className="img-catalogo" src={product.img}></img>
                    <h3 className="titulo-catalogo">{product.name}</h3>
                </div>
            </div>
        </>
    )
}

export default Item