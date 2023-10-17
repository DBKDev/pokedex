import React from "react";
import "../Styles/Card.css"

const Card = () => {
    return ( 
        <div id="Card-content">        
            <div className="Card-Pokemon">
            </div>
            <div className="Card-infos">
                <h1>Bulbizarre</h1>
                <p className="type-pokemon">type de pokemon</p>
                <p className="localisation-pokemon">Localisation</p>
            </div>
        </div>
     );
}
 
export default Card;