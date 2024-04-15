import React from 'react';
import Cards from './Cards';
import "../css/cardsList.css";


const CardsList = ({ cards }) => {
  return (
    <div className='cardsList'>
        {cards.map((cards, index) => (
            <Cards key={index} {...cards}/>
        ))}</div>
  )
}

export default CardsList