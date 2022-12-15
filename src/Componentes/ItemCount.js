import React from "react";
import "../styles/agregar.css"
export const ItemCount = ({count, cantidadAgregar}) => {
    return (
    <div>
        <div className="container-agregar">
            <button className="menos" onClick={() => cantidadAgregar("menos")}>-</button>
            <span className="count">{count}</span>
            <button className="mas" onClick={() => cantidadAgregar("mas")}>+</button>
        </div>
    </div>
    );
};
