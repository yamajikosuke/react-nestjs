import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../CounterSlice";
import formReducer from "../FormSlice";
import userReducer from "../UsersSlice";
import gachaReducer from "../gachaSlice";
import TodoReducer from "../TodoSlice";
import userProfilesReducer from "../../userProfiles/store/userProfilesSlice";
import { Details } from "../../EditModal";

export type TodoItem = {
  id: number;
  data: string;
  is_done: boolean;
  details: Details;
  dead_line: Date;
};

export type TodoProps = {
  todos: TodoItem[];
};

export type CounterStoreProps = {
  counter: { count: number };
};

export type FormStoreProps = {
  form: { text: string; isValid: boolean };
};

export type UserStoreProps = {
  users: Record<string, string>[];
  loading: boolean;
  error: boolean;
};

export type UserProfile = {
  id: number;
  name: string;
  email: string;
};

export type UserProfilesStoreProps = {
  userProfiles: {
    items: UserProfile[];
    loading: boolean;
    error: string | null;
  };
};

export type GachaStoreProps = {
  gacha: [
    {
      name: string;
    },
  ];
};

const reducer = {
  counter: counterReducer,
  form: formReducer,
  users: userReducer,
  gacha: gachaReducer,
  todos: TodoReducer,
  userProfiles: userProfilesReducer,
};

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
