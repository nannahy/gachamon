import { useMemo } from "react";
import styled from "styled-components";

type PokeDataType = {
  [index: string]: any;
};

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
        <Box className="box">
          <p>
            HELLO,
            <br /> I'M {pokeData.name.toLocaleUpperCase()}!
          </p>
          <Image
            src={pokeData.sprites.front_default}
            onClick={onClick}
            type={type}
          />
          {type === "detail" &&
            ["name", "weight", "height"].map((propKey) => (
              <div>
                {propKey}:{pokeData[propKey]}
              </div>
            ))}
          {type === "detail" &&
            pokeData.stats.map(([stat, gage]: [string, string]) => (
              <div>
                {stat}:{gage}
              </div>
            ))}
        </Box>
      ) : (
        <Box>
          CHOOSE
          <br />
          YOUR
          <br />
          POKEMON!
        </Box>
      )}
    </>
  );
};

export default Profile;

const Image = styled.img<{ type: string }>`
  width: 200px;
  cursor: ${({ type }: { type: string }) =>
    type === "default" ? "pointer" : "default"};
`;

const Box = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
  p {
    font-size: 18px;
  }
`;
