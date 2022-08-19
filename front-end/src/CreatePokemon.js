export const CreatePokemon = props => {
  return (
    <div className="pokemon-container" key={props.pokemonName}>
      <img
        className="search-image"
        src={props.pokemonImg}
        alt={props.pokemonName}
      />
      {props.pokemonName}
    </div>
  );
};


