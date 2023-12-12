export const getPokemons = async () => {
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
};
