const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemon = async (pokemon: number) => {
  const res = await (await fetch(`${baseURL}/pokemon/${pokemon}`)).json();
  return res;
};

export const getPokemonData = (pokeData: { [index: string]: any }) => {
  const { name, height, weight, sprites } = pokeData;
  return { name, height, weight, sprites };
};

export const getPokemonDataDetail = (pokeData: { [index: string]: any }) => {
  const { name, height, weight, sprites, stats } = pokeData;
  const parsedStat = stats.map((stat: any) => [stat.stat.name, stat.base_stat]);
  return { name, height, weight, sprites, stats: parsedStat };
};

export const getRandomPokemonId = () => Math.floor(Math.random() * 100);
