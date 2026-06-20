import { createSlice } from "@reduxjs/toolkit";
export const formSlice = createSlice({
    name: "form",
    initialState: {
        text: "",
        isValid: true,
    },
    reducers: {
        input: (state, action) => {
            // https://www.hypertextcandy.com/learn-react-redux-with-hooks-and-redux-starter-kit#redux-toolkit-%E3%81%AE%E7%99%BB%E5%A0%B4
            //      return Object.assign({}, state, { text: action.payload });
            state.text = action.payload;
        },
        validate: (state, action) => {
            console.log(action.payload);
            return Object.assign({}, state, {
                isValid: !!action.payload.match(/^\d*$/),
            });
        },
        clear: (state) => {
            state.text = "";
        },
    },
});
export const { input, validate, clear } = formSlice.actions;
export default formSlice.reducer;
