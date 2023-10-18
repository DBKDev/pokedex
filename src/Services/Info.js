import axios from "axios";

function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=50")
}
function getPokemonsbyId(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}

export default {
    getPokemons,  
    getPokemonsbyId,  
}