import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
export const Qrcode = () => {
    const url = useUrlStore((state) => state.url);
    const setUrl = useUrlStore((state) => state.setUrl);
    const handleChange = (e) => {
        setUrl(e.target.value);
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "Qrcode"] }), _jsx("hr", {}), _jsxs("div", { style: { textAlign: "center", marginTop: "50px" }, children: [_jsx("h1", { children: "QR Code Generator" }), _jsx("input", { type: "text", value: url, onChange: handleChange, placeholder: "Enter URL", style: { padding: "10px", width: "300px" } }), _jsxs("div", { style: { marginTop: "20px" }, children: [_jsx(QRCodeCanvas, { value: url, size: QR_CANVAS_SIZE }), ";"] })] })] }) }));
};
