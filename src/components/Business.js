import React from 'react';
// import sb from '../resources/Small Businesses.png';
// import st from '../resources/Startups.png';
// import et from '../resources/Enterprises.png';
import business from '../resources/Businesses.png';
import './Business.css';

export default function Business(){
    return(
        <>
        <div className="business">
           {/* <h1>DESIGNED &nbsp; FOR &nbsp;BUSINESSES <br/> OF&nbsp; ALL&nbsp; SIZES</h1>
           <div className="images">
            <img src={sb} alt="" id="sb" className="image" />
            <img src={st} alt="" id="st" className="image" />
            <img src={et} alt="" id="et" className="image" />
           </div> */}
           <img src={business} alt="" id="business" />
        </div>
        </>
    )
}