// import { AppContext } from "./AppContext";
// import React, { useState, useEffect } from "react";

// export const useFilterPokemon = () => {
//     var apiCall = `https://pokeapi.co/api/v2/type/`
//     const [types, setTypes] = useState(null)
//     const [selType, setSelType] = useState(null);
//     const [selPokemons, setSelPokemons] = useState(null);

//     useEffect(() => {
//         let arrOfTypes = [];
//         fetch(apiCall) 
//         .then(res => res.json())
//         .then(data => data.results)

//         setTypes(arrOfTypes.map(index => index.name))//types should now be an array of normal, fire, water, etc
        
//     })

//     /*
//          useEffect(() => {
//             console.log("pokemon fetch");
//             if (data !== null) {
//             console.log("pokemon fetch data not null");
//             let pokemonFetchArray = data.map(pokemon => fetch(pokemon.url).then(res => res.json()));
//             Promise.all(pokemonFetchArray).then(values => setPokemons(values));
//             }
//         }, [data]);

//     */

//     function generateOptions(){
//         for (let i = 0; i < types.length; i++){
//             <option value={types[i]} onClick={() => setSelType(types[i])}> {types[i]} </option>
//         }
//     }

//     function filter(){
        
//         fetch(`${apiCall}/${selType}`) 
//         .then(res => res.json())
//         .then(data => data.pokemon)
//         .then(pokemons => {
//             pokemons.map(pokemon => {
//             .then(types => {
//                 let typeFetchArray = types.map(type => fetch(type.url).then(res => res.json()));
//             })
//             })
//         })

//         setTypes(arrOfTypes.map(index => index.name))//types should now be an array of normal, fire, 

//     }
   
//    return (
//         <select> Select a type... 
//             {generateOptions(types)}
//         </select>
//     )
// }

