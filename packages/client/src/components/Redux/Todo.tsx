import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodoProps } from "./store/store";
import { getTodos } from "./TodoSlice";
// import { store } from "./store/store";

export const ReduxTodo: React.FC = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector<TodoProps>((state) => state.todos) as TodoProps;

  useEffect(() => {
    console.log("Todo-useEffect");
    dispatch(getTodos());
  }, [dispatch]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(input(e.currentTarget.value));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Todo</h1>
        {todos &&
          todos.map((todo, index) => (
            <div key={index}>
              {todo.id}
              {todo.data}
            </div>
          ))}
        <hr />
        <div className="controll">
          <input
            name="todo"
            type="input"
            className="input"
            onChange={handleOnchange}
          />
        </div>
      </div>
    </section>
  );
};
