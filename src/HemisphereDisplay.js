import React from "react";
import northernPic from "./images/northern-hemisphere.png";
import southernPic from "./images/southern-hemisphere.png";
import "./Hemisphere.css"

const hemisphereConfig = {
    Northern: {
        text : "Northern Hemisphere",
        picture : northernPic
    },
    Southern : {
        text : "Southern Hemisphere",
        picture : southernPic
    }
}

const HemisphereDisplay = ({latitude,longitude}) => {

    const hemisphere = latitude > 0 ? "Northern": "Southern";
    const eastWest = longitude > 0 ? "Eastern Side" : "Western Side";
    const {text,picture} = hemisphereConfig[hemisphere]
    

    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <img src={picture} alt = "Hemisphere"/>
                <br />
                <h2>Hey, you are in  {text}  and  {eastWest}...</h2>
            </div>
            
        </div>
    )
}

export default HemisphereDisplay;