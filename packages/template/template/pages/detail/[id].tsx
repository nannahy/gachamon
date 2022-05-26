import { useRouter } from "next/router";
import { Profile } from "@gachamon/ui";

const DetailProfile = () => {
  const router = useRouter();
  const { pokeData } = router.query;
  const parsedPokeData = pokeData ? JSON.parse(pokeData as string) : {};
  return (
    <>
      {pokeData && (
        <Profile type="detail" pokeData={parsedPokeData} onClick={() => {}} />
      )}
    </>
  );
};

export default DetailProfile;
