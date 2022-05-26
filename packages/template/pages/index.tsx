import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  getRandomPokemonId,
  getPokemon,
  getPokemonData,
  getPokemonDataDetail,
} from "@gachamon/controller";
import { Button, Profile } from "@gachamon/ui";
import { useRouter } from "next/router";

const POKEMON: [number, string][] = [
  [25, "yellow"],
  [4, "red"],
  [1, "green"],
  [7, "blue"],
];

export type PokeDataType = { [index: string]: any };

const Home: NextPage = () => {
  const [pokeId, setPokemon] = useState<null | number>(null);
  const [pokeData, setPokeData] = useState<{
    default: PokeDataType;
    detail: PokeDataType;
  } | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (!pokeId) return;
    const check = async () => {
      const pokemonData = await getPokemon(pokeId);
      const pokeDefault = getPokemonData(pokemonData);
      const pokeDetail = getPokemonDataDetail(pokemonData);
      setPokeData({ default: pokeDefault, detail: pokeDetail });
    };
    check();
  }, [pokeId]);

  const onClick = () => {
    router.push(
      {
        pathname: `/detail/${pokeId}`,
        query: { pokeData: JSON.stringify(pokeData) },
      },
      `/detail/${pokeId}`
    );
  };

  return (
    <>
      <Profile pokeData={pokeData} onClick={onClick} />
      <div className="button-box">
        {POKEMON.map(([mon, color]) => (
          <Button
            key={`${mon}-button`}
            onClick={() => setPokemon(mon)}
            color={color}
          ></Button>
        ))}
        <Button
          key={`random-button`}
          onClick={() => setPokemon(getRandomPokemonId())}
          color={"white"}
        ></Button>
      </div>
      <style jsx>{`
        .button-box {
          display: flex;
          column-gap: 16px;
          margin-bottom: 48px;
        }
      `}</style>
    </>
  );
};

export default Home;
