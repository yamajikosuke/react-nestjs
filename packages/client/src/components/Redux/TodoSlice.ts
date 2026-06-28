import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Dispatch } from "react";
import axios from "axios";

import { TodoItem, TodoProps } from "./store/store";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios.get("/api/todos/");
  return res.data;
});

const initialState = {
  todos: [] as TodoProps["todos"],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
  //https://zenn.dev/luvmini511/articles/819d8c7fa13101
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        //        state.loading = true;
      })
      .addCase(
        getTodos.fulfilled,
        (state, action: PayloadAction<TodoItem[]>) => {
          console.log(action.payload);
          //   state.loading = false;
          state.todos = action.payload;
        },
      )
      .addCase(getTodos.rejected, (state) => {
        // state.loading = false;
        // state.error = true;
      });
  },
});

// export const { setUsers } = usersSlice.actions;

export default todoSlice.reducer;
