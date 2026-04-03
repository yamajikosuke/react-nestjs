import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  data: string;
};
/*
Reactでモダール作成：react-modal
https://zenn.dev/91works/articles/9eff6cd9939e41

Reactでyoutubeのタグを埋め込む方法
https://job-info.hateblo.jp/entry/2024/07/15/211159

React TypeScriptでvideoタグだけで動画を読み込む
https://qiita.com/ShortArrow/items/9c43a179a51c6ec32106

FontAwesomeのアイコン検索
https://fontawesome.com/search?q=close
*/
export const SampleModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  data,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "2rem",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div>{data}</div>
      <p
        style={{
          position: "absolute",
          top: "0rem",
          right: "0.5rem",
          cursor: "pointer",
          fontSize: "1.5rem",
          height: "0.5rem",
        }}
        onClick={() => setIsModalOpen(false)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </p>
    </Modal>
  );
};
