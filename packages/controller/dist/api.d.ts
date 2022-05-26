export declare const getPokemon: (pokemon: number) => Promise<any>;
export declare const getPokemonData: (pokeData: {
    [index: string]: any;
}) => {
    name: any;
    height: any;
    weight: any;
    sprites: any;
};
export declare const getPokemonDataDetail: (pokeData: {
    [index: string]: any;
}) => {
    name: any;
    height: any;
    weight: any;
    sprites: any;
    stats: any;
};
export declare const getRandomPokemonId: () => number;
