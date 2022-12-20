import { useContext } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../img/empty.png";
import  Item  from "../Componentes/Item";
import { Layout } from "../Componentes/Layout";
import { TrashWidget } from "../Componentes/TrasWidget";
import { Context } from "../context/CartContextProvider";
import "../styles/cart.css"

const Cart = () => {
  
  const { productsAdded: items, totalAmount } = useContext(Context);

  return (
    <Layout>
      <div className="flex flex-col max-w-[50%]">
        {items.length === 0 ? (
          <div className="cart-container">
            <img src={EmptyCart} alt="Empty Cart" className="w-44 h-44" />
            <h1 className="vacio">No has agregado productos</h1>
            <Link to="/">
            <button
              className="boton-inicio"
            >
              Ir al Inicio
            </button></Link>
          </div>
        ) : (
          <div>
            <div className="">
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="container-quitar">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="container-final">
              <div className="total">
                <h3>
                  Total a pagar: <strong>${totalAmount}</strong>
                </h3>
                <Link to="/checkout">
                <button
                  className="checkout"
                >
                  Ir al Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
