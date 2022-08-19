import React, { useContext } from "react";
import { AppContext } from './AppContext'
export const CreateInfoPage = props => {
    let pokemon = props.pokemon
    const { data, setinfoPage } = useContext(AppContext);
    console.log(data);

  return (
    <>
      <h1>{pokemon.name}</h1>
      <button onClick={() => setinfoPage(false)}> Take me back to the homepage! </button>
      <div className="pokemon-info-container">
        <div>
          <img
          className="info-image"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          />
        </div>
        <div className="info">
          <h3>Height</h3>
          <li className="height">{pokemon.height}</li>
          <h3>Weight</h3>
          <li className="weight">{pokemon.weight}</li>
          <h3>Types</h3>
          {pokemon.types.map(type => {
            return (
              <ul className="types">
                <li>{type.type.name}</li>
              </ul>  
            )
          })}
        </div>
          <div className="info">
          <h3>Stats</h3>
          {pokemon.stats.map(stat => {
              return (
              <ul className="stats">
              <li>{stat.stat.name}</li>
              <li>{stat.base_stat}</li>
              </ul>
              )
          })}
        </div>
        <div className="info">
            <h3>Moves</h3>
            {pokemon.moves.map(moves => (<span>{moves.move.name}, </span>))}
        </div>
      </div>
    </>
  );
};