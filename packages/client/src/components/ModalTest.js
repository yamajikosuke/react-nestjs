import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { SampleModal } from "./SampleModal";
Modal.setAppElement("#root");
export const ModalTest = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [data, setData] = React.useState("");
    const handleClick = (modalNumber) => {
        modalNumber === 1
            ? setData("モーダルのコンテンツ（その１）")
            : setData("モーダルのコンテンツ（その２）");
        setIsModalOpen(true);
    };
    return (_jsxs("section", { className: "section", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "ModalTest"] }), _jsx("hr", {}), _jsx("div", { children: _jsx("a", { href: "javascript:void(0)", onClick: () => handleClick(1), children: "\u30E2\u30FC\u30C0\u30EB\u3092\u958B\u304F\uFF08\u305D\u306E\uFF11\uFF09" }) }), _jsx("div", { children: _jsx("a", { href: "javascript:void(0)", onClick: () => handleClick(2), children: "\u30E2\u30FC\u30C0\u30EB\u3092\u958B\u304F\uFF08\u305D\u306E\uFF12\uFF09" }) }), _jsx("div", { style: {
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                }, onClick: () => handleClick(2), children: "\u30E2\u30FC\u30C0\u30EB\u3092\u958B\u304F\uFF08\u305D\u306E\uFF12\uFF09div\u30BF\u30B0" }), _jsx(SampleModal, { isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen, data: data }), _jsx("hr", {})] }));
};
