import { combineReducers, createStore, compose } from "redux";
// import thunk from "redux-thunk";

export type StateProps = {
  count: number;
  posts: { id: number; title: string }[];
};

export type CountProps = {
  count: number;
};

export type PostsProps = {
  posts: { id: number; title: string }[];
};

const initialState: StateProps = {
  count: 50,
  posts: [
    { id: 1, title: "Reduxについて" },
    {
      id: 2,
      title: "ReduxのHooksについて",
    },
  ],
};

// const initialCountState: CountProps = {
//   count: 50,
// };

export type ActionTypeProps = {
  type: "INCREASE_COUNT" | "DECREASE_COUNT";
};

const reducer = (state = initialState, action: ActionTypeProps): CountProps => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return {
        count: state.count + 1,
      };
    case "DECREASE_COUNT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const countReducer = (
  state = {
    count: 50,
  }
): CountProps => {
  return state;
};

const postsReducer = (
  state = {
    posts: [
      { id: 1, title: "Reduxについて" },
      {
        id: 2,
        title: "ReduxのHooksについて",
      },
    ],
  }
): PostsProps => {
  return state;
};

const initialFetchState = {
  posts: [],
};

export type FetchDataProps = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type FetchActionProp = {
  type: "GET_POST_DATA";
  payload: FetchDataProps[];
};

const fetchReducer = (state = initialFetchState, action: FetchActionProp) => {
  switch (action.type) {
    case "GET_POST_DATA":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  countReducer,
  postsReducer,
  fetchReducer,
});

export const fetchPosts = () => {
  return async (dispatch: (data: FetchActionProp) => void) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({
      type: "GET_POST_DATA",
      payload: data,
    });
  };
};

//https://qiita.com/AshSuzuki/items/111d5a7c5d30fd1123c3
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
}
declare var window: ExtendedWindow;

// const composeReduxDevToolsEnhancers =
//   (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(
//   rootReducer,
//   composeReduxDevToolsEnhancers(applyMiddleware(thunk))
// );

console.log(store.getState());
export default store;
