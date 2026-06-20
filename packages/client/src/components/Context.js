import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SampleContext } from "../context/sampleContext";
import { FormTypeModal } from "./FormTypeModal";
export const Context = () => {
    const sampleContext = useContext(SampleContext);
    const [isOpenModal, setOpenModal] = useState(false);
    const [formType, setFormType] = useState({ type: "normal" });
    const navigate = useNavigate();
    return (_jsxs("section", { className: "section", children: [_jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useContext" }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Sample context" }), _jsx("div", { children: sampleContext.title.en }), _jsx("div", { children: sampleContext.title.ja })] }), _jsx("hr", {}), _jsx("div", { className: "field", children: _jsx("label", { className: "label", children: "Form type context" }) }), _jsx("div", { className: "field", children: _jsx("button", { className: "button", onClick: () => setOpenModal(true), children: "open modal" }) }), _jsx("div", { className: "field", children: _jsx("ul", { children: _jsx("li", { children: _jsx("div", { onClick: () => {
                                        navigate.push({
                                            pathname: "/contextNextPage",
                                            state: { centerType: "existCenter", formType: formType },
                                        });
                                    }, children: "\u30D5\u30A9\u30FC\u30E0" }) }) }) })] }), isOpenModal && (_jsx(FormTypeModal, { setOpenModal: setOpenModal, formType: formType, setFormType: setFormType }))] }));
};
