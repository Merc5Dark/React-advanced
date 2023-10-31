import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
        <img className='cad-image' src='https://shrturl.app/1RhU0K' alt="profile picture" height={'50px'} width={'50px'}></img>
        <h2 className='card-title'>Brogrammer</h2>
        <p className='card-text'>I love Tom Clancy's Ghost Recon</p>
    </div>
  )
}

export default Card;