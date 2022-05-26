/// <reference types="react" />
declare type PokeDataType = {
    [index: string]: any;
};
declare const Profile: ({ pokeData: originPokeData, type, onClick, }: {
    pokeData: {
        default: PokeDataType;
        detail: PokeDataType;
    } | null;
    type?: "detail" | "default" | undefined;
    onClick: () => void;
}) => JSX.Element;
export default Profile;
