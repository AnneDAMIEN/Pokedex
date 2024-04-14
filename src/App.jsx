import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";

const pokemonList = [
  {
    myName: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    myName: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    myName: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    myName: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    myName: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
