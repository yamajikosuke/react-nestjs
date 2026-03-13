import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

export type InputUserProps = {
  screenName: string;
  password: string;
};

type itemProps = {
  id: number;
  screenName: string;
  password: string;
};

export const Users: React.FC = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputUserProps>();

  const fetchList = useCallback(async () => {
    const res = await axios.get("/users");
    setItems(res.data);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleClick = async (data: InputUserProps) => {
    console.log("data");
    console.log(data);
    await axios.post("/users/register", {
      screenName: data.screenName,
      password: data.password,
    });
    fetchList();
    reset({ screenName: "", password: "" });
  };

  console.log(errors);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          Users
        </h1>
        <div className="field">
          <div className="control">
            <input
              className={errors.screenName ? "input is-danger" : "input"}
              type="text"
              {...register("screenName", {
                required: "入力してください。",
                maxLength: { value: 50, message: "最大文字数は50文字です" },
              })}
              placeholder="Text input"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>{errors.screenName?.message}</div>
        <div className="field">
          <div className="control">
            <input
              {...register("password", {
                required: "入力してください。",
                maxLength: { value: 50, message: "最大文字数は50文字です" },
              })}
              className={errors.password ? "input is-danger" : "input"}
              placeholder="Input password"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>{errors.password?.message}</div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              onClick={handleSubmit(handleClick)}
            >
              register
            </button>
          </div>
        </div>

        <table className="table is-fullwidth">
          <tbody>
            {items.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td></td>
                  <td>
                    <div>{item.screenName}</div>
                    <div style={{ fontSize: "0.7rem" }}>{item.password}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
