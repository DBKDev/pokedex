import React from "react";
import "../Styles/pokedexStyle.css"
import IconPokeball from "../IconPokeball.png"
import Card from "./Card";

const Pokedex = () => {
    return <>
        <div className="titre">
            <img id="pokeball" src={IconPokeball}/>
            <h1 className="titrepokedex">Pokedex</h1>
            <img id="pokeball" src={IconPokeball}/>

        </div>
        <div className="Container-card">
            <Card/>
        </div>
   </>;
}
 
export default Pokedex;