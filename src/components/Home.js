import React from 'react'
// import logo from '../resources/Logo.png';
// import cheeseburger from '../resources/Cheeseburger.png';
// import hero from '../resources/Hero Image.png';
import trust from '../resources/Trusted By.png';
// import star from '../resources/Star 4.png';
// import start from '../resources/CTA.png';
import home from '../resources/Hero Section.png';
import './Home.css'
export default function Home(){
    return(
     <>
      
        <div className="home">
         {/*<div className="logo">
             <img id="logo" src={logo}/>
             </div>
             <div className="cheese">
                <img id="cheese" src={cheeseburger}/>
             </div>
             <div className="star">
                <img src={star} alt="" id="star" />

             </div>
             <div className="hero">
               <img id="hero" src={hero}/>
             </div>
             <div className="text">
               <h1 >
                  EASY WAY TO <br/> BANKING
               </h1>
               <p>
                  We give you both the foundation and flexibility to <br/> build and grow digital capabilities and deliver <br/> customer experiences.
               </p>
             </div>
             <div className="start">
               <img src={start} alt="" id="start" />
             </div>
             <div className="trust">
              
              </div> */}
             <img src={home} alt="" id="home" />
             <img src={trust} alt="" id="trust" /> 
               
        </div>
    
     </>
    )
}