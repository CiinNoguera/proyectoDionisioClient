import React from 'react'

const Cards = ({ title, image, description }) => {
  return (
    <div className='cards'>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <button>pedir</button>
          <button>+</button>
          <button>-</button> 
        </div>
        
    </div>
  )
}

export default Cards