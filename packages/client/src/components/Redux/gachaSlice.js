import { createSlice } from "@reduxjs/toolkit";
// import { GachaStoreProps } from "./store/store";
const initialState = [
    {
        name: "",
    },
];
const getRandomInt = (max) => Math.floor(Math.random() * max);
const heros = [
    { name: "ラス" },
    { name: "モンモランシー" },
    { name: "エルフェルト" },
    { name: "ミリム" },
    { name: "リムル" },
];
const getHeros = (num) => {
    const buffer = [];
    for (let i = 0; i < num; i++) {
        buffer.push(heros[getRandomInt(heros.length)]);
    }
    console.log(buffer);
    return buffer;
};
export const gachaSlice = createSlice({
    name: "gacha",
    initialState,
    reducers: {
        //https://reffect.co.jp/react/redux-toolkit
        getHero: () => {
            return getHeros(1);
        },
        get3Heros: () => {
            return getHeros(3);
        },
    },
});
export const { getHero, get3Heros } = gachaSlice.actions;
export default gachaSlice.reducer;
