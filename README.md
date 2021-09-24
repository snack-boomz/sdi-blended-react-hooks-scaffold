# SDI Blended Weekly Workshop: React Hooks

For this activity, you will fulfill the following requirements:

## FIRST STEP:
Fork & clone this repository

## Repo Directions
- Create a new React application using `create-reacte-app`
- Navigate into your newly created directory and run the command `npm start` to start the React server on port 3000

## Project Specs

You will create a pokedex single page application using React Hooks and create-react-app. Please use the [PokeAPI](https://pokeapi.co/) we have seen throughout the previous units.

Use the following user stories to guide your development:

1. As a user, I should be able to navigate to the home page and see a list of the first 151 Pokemon, including their pictures, so that I can review the pokemon.
1. As a user, I should be able to click on a pokemon’s picture that directs me to a view that provides additional information about that pokemon, so that I can learn more about an individual pokemon.
    - This detailed view page should contain basic information about the Pokemon, such as flavor text, height and weight, types, base stats, and moves that the Pokemon is able to learn.
1. As a user, I should be able to click a button from the detailed view of a Pokemon to go back to the original list of Pokemon.
1. As a user, I should see a loading spinner when waiting for the page to load instead of seeing the pictures load piecemeal.

Your application should:
- Utilize the following React hooks in functional React components:
  - `useState`
  - `useEffect`
  - `useContext`
  - Custom hooks
- Be styled to look similar to the images below

![pokedex](/assets/pokedex.png)
![pokedetails](/assets/pokedetails.png)
![pokegif](/assets/pokegif.gif)

