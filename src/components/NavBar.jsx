function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <div>
      <button
        onClick={() => setPokemonIndex(pokemonIndex - 1)}
        style={{ visibility: pokemonIndex > 0 ? "visible" : "hidden" }}
      >
        Précédent
      </button>
      {pokemonIndex}
      <button
        onClick={() => setPokemonIndex(pokemonIndex + 1)}
        style={{
          visibility:
            pokemonIndex < pokemonList.length - 1 ? "visible" : "hidden",
        }}
      >
        Suivant
      </button>
    </div>
  );
}

export default NavBar;
