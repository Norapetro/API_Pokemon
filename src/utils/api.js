import axios from "axios";

export const getPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    const { results } = response.data;
    const pokemons = await Promise.all(
      results.map(async ({ url }) => {
        const response = await axios.get(url);
        return response.data;
      })
    );
    return pokemons;
  } catch (error) {
    console.error(error);
  }
}



/* export const getPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const { results } = await response.json();
  // fetch all pokemons
  const pokemons = await Promise.all(
    results.map(async ({ url }) => {
      const response = await fetch(url);
      return await response.json();
    })
  );
  return pokemons;
}; */


