import React, { useState, useEffect } from "react";
import { CreatePokemon } from "./CreatePokemon";
import "./App.css";
import { CreateInfoPage } from "./CreateInfoPage";
import { AppContext } from "./AppContext";


const App = () => {
  const [data, setData] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [infoPage, setinfoPage] = useState(false);
  const [selPokemon, setSelPokemon] = useState(null);


  const gettersSetters = {
    data,
    pokemons,
    infoPage,
    selPokemon,
    setData,
    setPokemons,
    setinfoPage,
    setSelPokemon
  }


  useEffect(() => {
    console.log("data fetch");

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(res => res.json())
      .then(obj => {
        setData(obj.results);
        return obj;
      });
  }, []);

  useEffect(() => {
    console.log("pokemon fetch");
    if (data !== null) {
      console.log("pokemon fetch data not null");
      let pokemonFetchArray = data.map(pokemon => fetch(pokemon.url).then(res => res.json()));
      Promise.all(pokemonFetchArray).then(values => setPokemons(values));
    }
  }, [data]);

  
if(pokemons.length > 1 && infoPage === false){
  return (
    <div className="main-content">
      <h1>Pokedex</h1>
    {pokemons.map(pokemon => (
      <>
        <button className="pokemon-buttons" onClick={() => {setinfoPage(true); setSelPokemon(pokemon)}}>
        <CreatePokemon
          pokemonName={pokemon.name}
          pokemonImg={
            pokemon.sprites.other["official-artwork"].front_default
          }
        />
        </button>
      </>
    ))}
    </div>
  )
  } else if(pokemons.length < 1 || infoPage === false){
    return (
        <div className="loadingMessage">
          <p>Wait your face dude it'll be here soon</p>
          <iframe title="nugget" src="https://giphy.com/embed/3n6xKLLyKNaDe" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      )
  } else {
    return (
      <AppContext.Provider value={gettersSetters}>
        <div className="main-content">
          <CreateInfoPage pokemon={selPokemon}/>
        </div>
      </AppContext.Provider>
    ) 
  }
}


//   console.log('infopage', infoPage)
//   return (
//     <div className="App">
//       {(pokemons.length < 1) && (infoPage === false) ? (
//         <div className="loadingMessage">
//           <p>Wait your face dude it'll be here soon</p>
//           <iframe src="https://giphy.com/embed/3n6xKLLyKNaDe" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
//         </div>
        
//       ) : (
//         pokemons.map(pokemon => (
//           <>
//             <button onClick={() => setinfoPage(true)} className="pokemon-button">
//             <CreatePokemon
//               pokemonName={pokemon.name}
//               pokemonImg={
//                 pokemon.sprites.other["official-artwork"].front_default
//               }
//             />
//             </button>
//           </>
//         ))
//       )}
//       {(pokemons.length < 1) || (infoPage === true) ? (
//         <h1>infopage</h1>
//       ) : (<></>)}
//     </div>
//   );
// };

export default App;
