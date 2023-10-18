import React, {useEffect, useState} from 'react';
import "../Styles/pokedexStyle.css"
import IconPokeball from "../IconPokeball.png"
import Card from "./Card"
import Info from "../Services/Info";

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await Info.getPokemons();
            setPokemons(response.data.results)
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchInfo()
    }, []);

    return <>
        <div className="titre">
            <img id="pokeball" src={IconPokeball}/>
            <h1 className="titrepokedex">Pokedex</h1>
            <img id="pokeball" src={IconPokeball}/>

        </div>
        <div className="Container-card">
            {pokemons.map(m => {
            return <Card key= {m.name} pokemon={m}/>
                   
        })}
        </div>
        
   </>;
}
 
export default Pokedex;