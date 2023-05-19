import React from 'react';
import services from '../resources/Mini Section.png';
import test from '../resources/Testimonials.png';
import faq from '../resources/FAQ.png';
import './Services.css';

export default function Services(){
    return(
        <>
         <div className="services">
            <img src={services} alt="" id="services" />
            <img src={test} alt="" id="test" />
            <img src={faq} alt="" id="faq" />
         </div>
        </>
    )
}