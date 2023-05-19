import React from 'react';
// import feature1 from '../resources/Group 4.png';
// import feature1b from '../resources/Group 5.png';
// import feature2 from '../resources/Group 7.png';
// import feature2b from '../resources/Group 6.png';
import features from '../resources/Features.png';
import './Features.css';


export default function Features(){
    return(
        <>
        <div className="features">
            {/* <h1>
                ALL &nbsp; FEATURES&nbsp; YOU &nbsp;NEED <br/> IN&nbsp; ONE&nbsp; PLACE
            </h1>
            <div className="feature1">
            <img src={feature1} alt="" id="feature1" />
            <img src={feature1b} alt="" id="feature1b" />
            </div>
            <div className="feature2">
                <img src={feature2} alt="" id="feature2" />
                <img src={feature2b} alt="" id="feature2b" />
            </div> */}
            <img src={features} alt="" id="features" />
        </div>
        </>
    )
}