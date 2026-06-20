import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Dispatch } from "react";
export const getUsers = createAsyncThunk("users/getUsers", async () => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
});
const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [{ name: "" }],
        loading: false,
        error: false,
    },
    reducers: {},
    //https://zenn.dev/luvmini511/articles/819d8c7fa13101
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
            state.loading = true;
        })
            .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        })
            .addCase(getUsers.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    },
});
// export const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//   },
//   reducers: {
//     setUsers: (state, action) => {
//       console.log(action.payload);
//       state.users = action.payload;
//     },
//   },
// });
// export const getUsers = () => {
//   return async (
//     dispatch: Dispatch<{ payload: { name: string }; type: string }>
//   ) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     dispatch(setUsers(data));
//   };
// };
// export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
