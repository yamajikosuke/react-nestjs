import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FormattedDate } from "react-intl";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { EditModal, InputProps, Details } from "./EditModal";

type itemProps = {
  id: number;
  data: string;
  is_done: boolean;
  details: Details;
  dead_line: Date;
};

export const ToDo: React.FC = () => {
  const [items, setItems] = useState<itemProps[]>([]);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [editId, setEditId] = useState<number>(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputProps>();

  const fetchList = useCallback(async () => {
    const res = await axios.get("/todos/");
    setItems(res.data);
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const getItem = (id: number) => {
    return items.filter((item) => item.id === id)[0];
  };

  const handleClick = async (data: InputProps) => {
    console.log("data");
    console.log(data);
    await axios.post("/todos/register", {
      is_done: false,
      data: data.title,
      detail: data.detail,
      dead_line: data.deadLine,
    });
    fetchList();
    reset({ title: "", detail: "", deadLine: null });
  };

  const handleDelete = async (deleteId: number) => {
    if (window.confirm("削除してよろしいですか？")) {
      await axios.delete(`/todos/${deleteId}/delete`);
      fetchList();
    }
  };

  const handleEdit = (editId: number) => {
    setIsOpenCardModal(true);
    setEditId(editId);
  };

  const updateIsDone = async (id: number): Promise<void> => {
    await axios.put(`/todos/${id}`, {
      data: getItem(id).data,
      is_done: !getItem(id).is_done,
      detail: getItem(id).details?.detail,
    });
    fetchList();
  };
  console.log(errors);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          ToDo
        </h1>
        <div className="field">
          <div className="control">
            <input
              className={errors.title ? "input is-danger" : "input"}
              type="text"
              {...register("title", { required: "入力してください。" })}
              // ref={register({
              //   required: "This field is required",
              //   maxLength: { value: 50, message: "最大文字数は50文字です" },
              // })}
              placeholder="Text input"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>{errors.title?.message}</div>
        <div className="field">
          <div className="control">
            <textarea
              {...register("detail")}
              className="textarea"
              placeholder="Input detail"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              {...register("deadLine")}
              className="input"
              type="Date"
              placeholder="Deadline"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              onClick={handleSubmit(handleClick)}
            >
              Submit
            </button>
          </div>
        </div>

        <table className="table is-fullwidth">
          <tbody>
            {items.map((item, idx) => {
              const titleStyle = item.is_done
                ? { color: "#aaa", textDecoration: "line-through" }
                : {};
              return (
                <tr key={idx}>
                  <td>
                    <input
                      className="is-checkradio"
                      type="checkbox"
                      name="exampleCheckbox"
                      checked={item.is_done}
                      onChange={(): Promise<void> => updateIsDone(item.id)}
                    />
                  </td>
                  <td style={titleStyle}>
                    <div>{item.data}</div>
                    <div style={{ fontSize: "0.7rem" }}>
                      {item.details?.detail}
                    </div>
                  </td>
                  <td>
                    <div>
                      {item.dead_line ? (
                        <FormattedDate
                          value={item.dead_line}
                          year="numeric"
                          month="2-digit"
                          day="2-digit"
                        />
                      ) : (
                        "-"
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      className="button is-small"
                      onClick={(): void => handleEdit(item.id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>{" "}
                    <button
                      className="button is-small"
                      onClick={(): Promise<void> => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isOpenCardModal && (
        <EditModal
          id={editId}
          item={getItem(editId)}
          setIsOpenCardModal={setIsOpenCardModal}
          fetchList={fetchList}
        />
      )}
    </section>
  );
};
