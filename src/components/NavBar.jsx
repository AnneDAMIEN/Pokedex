function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const buttonPokemon = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      <h1>Boutons Pokemon</h1>
      {pokemonList.map((p, index) => (
        <button key={p.myName} onClick={() => buttonPokemon(index)}>
          {p.myName}
          {p.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
