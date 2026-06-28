import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const schema = z.object({
  screenName: z
    .string()
    .max(10, "最大文字数は10文字です")
    .min(5, {
      message: "5文字以上である必要があります。",
    })
    .min(1, { message: "必須項目です" }),
  password: z
    .string()
    .min(8, { message: "8桁以上のパスワードを入力してください" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "英大文字、英小文字、数字で入力してください",
    }),
});

type Schema = z.infer<typeof schema>;

type itemProps = {
  id: number;
  screenName: string;
  password: string;
};

export const UsersWithZod: React.FC = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: {
      screenName: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const fetchList = useCallback(async () => {
    const res = await axios.get("/api/users");
    setItems(res.data);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const handleClick = async (data: Schema) => {
    await axios.post("/api/users/register", {
      screenName: data.screenName,
      password: data.password,
    });
    fetchList();
    reset({ screenName: "", password: "" });
  };

  console.log(errors.screenName);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          UsersWithZod
        </h1>
        <form onSubmit={handleSubmit(handleClick)}>
          <div className="field">
            <div className="control">
              <input
                className={errors.screenName ? "input is-danger" : "input"}
                type="text"
                {...register("screenName")}
                placeholder="Text input"
              />
            </div>
          </div>
          <div style={{ color: "red" }}>{errors.screenName?.message}</div>
          <div className="field">
            <div className="control">
              <input
                {...register("password")}
                className={errors.password ? "input is-danger" : "input"}
                placeholder="Input password"
              />
            </div>
          </div>
          <div style={{ color: "red" }}>{errors.password?.message}</div>
          <div className="field">
            <div className="control">
              <button className="button is-link">register</button>
            </div>
          </div>
        </form>

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
