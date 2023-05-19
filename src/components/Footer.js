import React from 'react';
import footer from '../resources/Newsletter.png'
import './Footer.css';

export default function Footer(){
    return(
        <>
        <div className="footer">
            <img src={footer} alt="" id="footer" />

        </div>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos hic praesentium quod repellat impedit quis. Iure consectetur adipisci labore ea, ad nisi libero nemo optio aut ullam, pariatur cumque amet magni earum quae, possimus numquam! Mollitia sequi molestias debitis.
        </p>
        </>
    )
}