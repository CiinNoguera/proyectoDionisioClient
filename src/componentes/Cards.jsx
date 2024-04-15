import React from 'react';
import Pedido from './Pedido';
import "../css/cards.css";

const Cards = ({ title, image, description }) => {
  return (
    <div className='cards'>
        <img src={image} alt={title} />
        <h1 className='cards__title'>{title}</h1>
        <p className='cards__description'>{description}</p>
        <div className='cards__containerPedido'>
          <h1 className='cards__precio'>precio</h1>
          <div>
               <Pedido/>
          </div>
        </div>
        
    </div>
  )
}

export default Cards