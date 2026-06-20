import { combineReducers, createStore } from "redux";
const initialState = {
    count: 50,
    posts: [
        { id: 1, title: "Reduxについて" },
        {
            id: 2,
            title: "ReduxのHooksについて",
        },
    ],
};
const reducer = (state = initialState, action) => {
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
const countReducer = (state = {
    count: 50,
}) => {
    return state;
};
const postsReducer = (state = {
    posts: [
        { id: 1, title: "Reduxについて" },
        {
            id: 2,
            title: "ReduxのHooksについて",
        },
    ],
}) => {
    return state;
};
const initialFetchState = {
    posts: [],
};
const fetchReducer = (state = initialFetchState, action) => {
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
    return async (dispatch) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        dispatch({
            type: "GET_POST_DATA",
            payload: data,
        });
    };
};
// const composeReduxDevToolsEnhancers =
//   (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(
//   rootReducer,
//   composeReduxDevToolsEnhancers(applyMiddleware(thunk))
// );
console.log(store.getState());
export default store;
