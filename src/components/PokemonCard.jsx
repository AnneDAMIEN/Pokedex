import PropTypes from "prop-types";


function PokemonCard ({pokemon}) {

   /*const handleClick = () => {
      setCount(count + 1)
   }*/

 return (

   <div>
 <figure>
    {pokemon.imgSrc === undefined ? <p>???</p> : <img src= {pokemon.imgSrc}/>}
    <figcaption>{pokemon.name}</figcaption>
    </figure>
   </div>

);
}

PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isOptional,
   }.isRequired)

}  



export default PokemonCard;