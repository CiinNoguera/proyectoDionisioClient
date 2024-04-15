import React, { useState } from 'react'

const Pedido = () => {
    const [pedido, setPedido] = useState(0);

    const sumarProducto = () => {
        setPedido(pedido + 1);
        console.log("pedido")
    };

    const restarProducto = () => {
        setPedido(pedido - 1);
        console.log("pedido")
    };
  return (
    <div>
        <button onClick={restarProducto}>+</button>
        <h1>{pedido}</h1>
        <button onClick={sumarProducto}>-</button> 
    </div>
  );
};

export default Pedido

