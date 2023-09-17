import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CounterStoreProps,
  FormStoreProps,
  UserStoreProps,
  GachaStoreProps,
} from "./store/store";
import { decrease, increase } from "./CounterSlice";
import { input, validate, clear } from "./FormSlice";
import { getUsers } from "./UsersSlice";
import { getHero, get3Heros } from "./gachaSlice";
import { Count } from "./Count";
import { Link } from "react-router-dom";
// import { store } from "./store/store";

export const ReduxTop: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<CounterStoreProps>(
    (state) => state.counter.count
  ) as CounterStoreProps["counter"]["count"];
  const text = useSelector<FormStoreProps>((state) => state.form.text);
  const { users, loading, error } = useSelector<UserStoreProps>(
    (state) => state.users
  ) as UserStoreProps;

  const gacha = useSelector<GachaStoreProps>(
    (state) => state.gacha
  ) as GachaStoreProps["gacha"];

  const isValid = useSelector<FormStoreProps>(
    (state) => state.form.isValid
  ) as boolean;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(input(e.currentTarget.value));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Redux</h1>
        <div>
          <a
            href="https://reffect.co.jp/react/react-redux-for-beginner"
            target="_blank"
            rel="noreferrer"
          >
            https://reffect.co.jp/react/react-redux-for-beginner
          </a>
          <br />
          <a
            href="https://qiita.com/japanesebonobo/items/843753903fdfa173f516"
            target="_blank"
            rel="noreferrer"
          >
            https://qiita.com/japanesebonobo/items/843753903fdfa173f516
          </a>
        </div>
        <hr />
        <h2 className="subtitle">Todo</h2>
        <Link to="/Redux/todo">Todo</Link>
        <hr />
        <h2 className="subtitle">ガチャ</h2>
        <div className="control">
          <button
            className="button is-link"
            onClick={() => {
              dispatch(getHero());
            }}
          >
            1回召喚
          </button>
          <button
            className="button is-link"
            onClick={() => {
              dispatch(get3Heros());
            }}
          >
            3回召喚
          </button>
        </div>
        {gacha.map((hero, index) => {
          return <div key={index}>{hero.name}</div>;
        })}
        <hr />
        <a
          href="https://reffect.co.jp/react/redux-toolkit"
          target="_blank"
          rel="noreferrer"
        >
          https://reffect.co.jp/react/redux-toolkit
        </a>
        <br />
        <>{count}</>
        <div>
          <button onClick={() => dispatch(increase())}>Up</button>
          <button onClick={() => dispatch(decrease())}>down</button>
        </div>
        <hr />
        <div>別コンポーネント</div>
        <Count />
        <hr />
        <>{text}</>
        <div>
          <input
            name="text"
            type="input"
            className="input"
            onChange={handleOnchange}
            value={text as string}
          />
        </div>
        <button onClick={() => dispatch(validate(text))}>validate</button>
        {!isValid && "数字ではありません。"}
        <div>
          <button onClick={() => dispatch(clear())}>クリア</button>
        </div>
        <hr />
        <h2>User</h2>
        {loading && <p>Loading</p>}
        {error && <p>データ取得に失敗しました。</p>}
        {users &&
          users.map((user, index) => <div key={index}>{user.name}</div>)}
      </div>
    </section>
  );
};
