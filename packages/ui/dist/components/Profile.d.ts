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
    onClick?: (() => void) | undefined;
}) => JSX.Element;
export default Profile;
