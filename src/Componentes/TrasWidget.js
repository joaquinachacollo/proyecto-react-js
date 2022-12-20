import { useContext } from "react";
import { Context } from "../context/CartContextProvider";
import "../styles/cart.css"
export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(Context);
  console.log({ itemId });
  return (
    <div className="quitar">
      <button className="boton-quitar"
      onClick={() => removeItem(itemId)}>
      Quitar
    </button>
    </div>
    
  );
};