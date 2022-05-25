const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemon = async (pokemon) => {
  const res = await (await fetch(`${baseURL}/pokemon/${pokemon}`)).json();
  return res;
};

export const getPokemonData = (pokeData) => {
  const { name, height, weight, sprites } = pokeData;
  return { name, height, weight, sprites };
};

export const getPokemonDataDetail = (pokeData) => {
  const { name, height, weight, sprites, stats } = pokeData;
  const parsedStat = stats.map((stat) => [stat.stat.name, stat.base_stat]);
  return { name, height, weight, sprites, stats: parsedStat };
};

export const getRandomPokemonId = () => Math.floor(Math.random() * 100);
