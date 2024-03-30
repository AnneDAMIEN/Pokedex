
import PokemonCard from "./components/PokemonCard";
import {useState} from "react";


const pokemonList = [
    {
        name : "bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name : "charmander",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
        name : "squirtle",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
        name : "pikachu",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
        name: "mew",
    },
    ];

function App() {

const [pokemonIndex, setPokemonIndex] = useState(0);


return (
<div>
<PokemonCard pokemon = {pokemonList[pokemonIndex]} />
<button onClick={() =>setPokemonIndex(pokemonIndex - 1)} style={{ visibility: pokemonIndex > 0 ? 'visible' : 'hidden' }}>Précédent</button>
    {pokemonIndex}
    <button onClick={() =>setPokemonIndex(pokemonIndex + 1)} style={{ visibility: pokemonIndex < pokemonList.length -1 ? 'visible' : 'hidden' }}>Suivant</button>
</div>
)
}

export default App;


