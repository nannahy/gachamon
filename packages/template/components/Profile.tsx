import { useMemo } from "react";
import { PokeDataType } from "../pages";

const Profile = ({
  pokeData: originPokeData,
  type = "default",
  onClick,
}: {
  pokeData: { default: PokeDataType; detail: PokeDataType } | null;
  type?: "default" | "detail";
  onClick: () => void;
}) => {
  const pokeData = useMemo(
    () => originPokeData?.[type],
    [originPokeData, type]
  );

  return (
    <>
      {pokeData ? (
        <div className="box">
          HELLO,
          <br /> I'M {pokeData.name.toLocaleUpperCase()}!
          <img
            className="poke_img"
            src={pokeData.sprites.front_default}
            onClick={onClick}
          />
          {type === "detail" &&
            ["name", "weight", "height"].map((propKey) => (
              <div>
                {propKey}:{pokeData[propKey]}
              </div>
            ))}
          {type === "detail" &&
            pokeData.stats.map(([stat, gage]) => (
              <div>
                {stat}:{gage}
              </div>
            ))}
        </div>
      ) : (
        <div className="box">
          CHOOSE
          <br />
          YOUR
          <br />
          POKEMON!
        </div>
      )}
      <style jsx>{`
        .poke_img {
          width: 200px;
          cursor: ${type === "default" ? "pointer" : "default"};
        }
        .box {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 18px;
          line-height: 1.4;
        }
      `}</style>
    </>
  );
};

export default Profile;
