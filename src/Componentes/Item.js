import Main from "../styles/Main.css"


const Item = ({ product }) => {
    return(
        <>
            <main>
                <div className="container-main">
                    <img className="img-catalogo" src={product.img}></img>
                    <h3 className="titulo-catalogo">{product.nombre}</h3>
                </div>
            </main>
        </>
    )
}

export default Item