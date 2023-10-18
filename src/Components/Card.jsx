import React,{useEffect, useState} from "react";
import "../Styles/Card.css"
import Info from "../Services/Info";

const Card = ({pokemon}) => {    
    const [currentPokemon, setCurrentPokemon] = useState({});

     const fetchPokemon = async () => {
        try{
            const response = await Info.getPokemonsbyId (pokemon.url.substr(41).replaceAll("/",""))
            setCurrentPokemon(response.data);
            console.log(currentPokemon)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, []);

    return ( 
    <div id="Card-placement">
        <div id="Card-content">        
            <div className="Card-Pokemon">
                <img className="Card-Poke"src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+pokemon.url.substr(41).replaceAll("/","")+".svg"} alt="" />
            </div>
            <div className="Card-infos">
                
                <h1>{currentPokemon.names != undefined && currentPokemon.names[4].name}</h1>
                {currentPokemon.names != undefined && currentPokemon.egg_groups.map(type =>{
                    return <p className="localisation-pokemon">{type.name}</p>
                })}
                <p className="type-pokemon">{}</p>
            </div>
        </div>
    </div>
     );
}
 
export default Card;