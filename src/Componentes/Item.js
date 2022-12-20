import { useNavigate } from "react-router-dom";
import "../styles/catalogo.css"

const Item = ({ product, quantityAdded }) => {
  
  const navigate = useNavigate();

  const description = product.descripcion.slice(0, 30);
  const title = product.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
        <>
            <div className="container">
                <div className="container-main">
                    <img src={product.img} onClick={handleNavigate} className="img-catalogo" alt="Product"/>
                    <span className="titulo-catalogo">
                    {product.name.length > 20 ? `${title} ...` : product.name}
                    </span>
                    <p className="">
                    {product.descripcion.length > 30
                    ? `${description} ...`
                    : product.descripcion}
                    </p>
                    <span className="precio-catalogo">Precio: ${product.precio}</span>
                    <span className="stock-catalogo">
                    {quantityAdded ? "Agregados" : "En Stock"}:{" "}
                    {quantityAdded || product.stock}
                    </span>
                </div>
            </div>
                
        </>  
  );
};

export default Item