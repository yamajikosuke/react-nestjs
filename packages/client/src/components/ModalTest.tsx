/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { SampleModal } from "./SampleModal";

Modal.setAppElement("#root");

export const ModalTest: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [data, setData] = React.useState<string>("");

  const handleClick = (modalNumber: number) => {
    modalNumber === 1
      ? setData("モーダルのコンテンツ（その１）")
      : setData("モーダルのコンテンツ（その２）");
    setIsModalOpen(true);
  };

  return (
    <section className="section">
      <h1 className="title">
        <FontAwesomeIcon icon={faListAlt} />
        ModalTest
      </h1>
      <hr />
      <div>
        <a href="javascript:void(0)" onClick={() => handleClick(1)}>
          モーダルを開く（その１）
        </a>
      </div>
      <div>
        <a href="javascript:void(0)" onClick={() => handleClick(2)}>
          モーダルを開く（その２）
        </a>
      </div>
      <div
        style={{
          cursor: "pointer",
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => handleClick(2)}
      >
        モーダルを開く（その２）divタグ
      </div>

      <SampleModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={data}
      />
      <hr />
    </section>
  );
};
