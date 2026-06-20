import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../CounterSlice";
import formReducer from "../FormSlice";
import userReducer from "../UsersSlice";
import gachaReducer from "../gachaSlice";
import TodoReducer from "../TodoSlice";
const reducer = {
    counter: counterReducer,
    form: formReducer,
    users: userReducer,
    gacha: gachaReducer,
    todos: TodoReducer,
};
export const store = configureStore({ reducer });
