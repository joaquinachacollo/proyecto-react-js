import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/CartContextProvider";
import icono from "../img/carrito.png"
import "../styles/Navbar.css"

const CartView = () => {
  const { productsAdded } = useContext(Context);
  const count = productsAdded.length;

  return (
    <div className="container-cart">
      <Link to="/cart">
        <button>
          <img className="carrito" src={icono}></img>
        </button>
        {count > 0 && (
          <span className="numero-cart">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartView;