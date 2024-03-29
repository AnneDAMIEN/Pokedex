import PropTypes from "prop-types";


function PokemonCard ({pokemon}) {
 return (

 <figure>
    {pokemon.imgSrc === undefined ? <p>???</p> : <img src= {pokemon.imgSrc}/>}
    
    <figcaption>{pokemon.name}</figcaption>
 </figure>
    )
}

PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isOptional,
   }.isRequired)

}  

console.log(PokemonCard);


export default PokemonCard;