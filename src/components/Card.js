import React from 'react';
import card from '../resources/Card 1.png';
import './Card.css';

export default function Card(){
    return(
        <>
        <img src={card} alt="" id="card" />
        </>
    )
}