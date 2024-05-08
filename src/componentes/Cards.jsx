import React, { useContext } from 'react';
import Pedido from './Pedido';
import "../css/cards.css";
import { UserContext } from '../context/UserContext';

const Cards = ({ title, image, description }) => {

  const { user } = useContext(UserContext);

  return (
    <div className='cards'>
        <img src={image} alt={title} />
        <h1 className='cards__title'>{title}</h1>
        <p className='cards__description'>{description}</p>
        <div className='cards__containerPedido'>
          <h1 className='cards__precio'>precio</h1>
          { user ? (
            <div>
               <Pedido/>
            </div>
          ) : null }
        </div>
        
    </div>
  )
}

export default Cards