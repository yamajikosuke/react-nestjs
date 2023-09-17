import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PostsProps, FetchDataProps } from "./store/index";
import { fetchPosts } from "./store/index";

export const Post: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(
    (state: { fetchReducer: PostsProps }) => state.fetchReducer.posts
  );
  useEffect(() => {
    console.log("useEffect");
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: FetchDataProps[] = await res.json();
      dispatch({
        type: "GET_POST_DATA",
        payload: data,
      });
    };
    getPosts();
    // react-thunkを使用する場合は、関数を外だし
    //    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
