import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useUrlStore } from "../store/useStore";

/**
 * QRコード生成の例
 * https://techblog.styleedge.co.jp/entry/2024/11/29/090000
 *
 *  * */
const QR_CANVAS_SIZE = 200; // 初期値は 128

export const Qrcode: React.FC = () => {
  const url = useUrlStore((state) => state.url);
  const setUrl = useUrlStore((state) => state.setUrl);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          Qrcode
        </h1>
        <hr />
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>QR Code Generator</h1>
          <input
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Enter URL"
            style={{ padding: "10px", width: "300px" }}
          />
          <div style={{ marginTop: "20px" }}>
            <QRCodeCanvas value={url} size={QR_CANVAS_SIZE} />;
          </div>
        </div>
      </div>
    </section>
  );
};
