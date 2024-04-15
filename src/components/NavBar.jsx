function NavBar({ setPokemonIndex, pokemonList }) {
  const buttonPokemon = (index) => {
    if (index === 3) {
      alert("Pika, Pikachu !!!");
    } else {
      return setPokemonIndex(index);
    }
  };

  return (
    <div>
      <h1>Boutons Pokemon</h1>
      {pokemonList.map((p, index) => (
        <button key={p.myName} onClick={() => buttonPokemon(index)}>
          {p.myName}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
