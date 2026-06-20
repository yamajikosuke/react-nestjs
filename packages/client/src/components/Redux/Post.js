import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.fetchReducer.posts);
    useEffect(() => {
        console.log("useEffect");
        const getPosts = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            dispatch({
                type: "GET_POST_DATA",
                payload: data,
            });
        };
        getPosts();
        // react-thunkを使用する場合は、関数を外だし
        //    dispatch(fetchPosts());
    }, [dispatch]);
    return (_jsx(_Fragment, { children: _jsx("ul", { children: posts.map((post) => (_jsx("li", { children: post.title }, post.id))) }) }));
};
