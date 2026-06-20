import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
export const FormTypeModal = (props) => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: "modal is-active", children: [_jsx("div", { className: "modal-background" }), _jsxs("div", { className: "modal-card", children: [_jsxs("header", { className: "modal-card-head", children: [_jsx("p", { className: "modal-card-title", children: "Form Type" }), _jsx("button", { className: "delete", "aria-label": "close", onClick: () => {
                                    props.setOpenModal(false);
                                } })] }), _jsxs("section", { className: "modal-card-body", children: [_jsx("div", { children: "Please select the form type." }), _jsxs("label", { className: "radio", children: [_jsx("input", { name: "formType", type: "radio", value: "normal", checked: props.formType.type === "normal", onChange: () => {
                                            props.setFormType({ type: "normal" });
                                            // setType({ type: "normal" });
                                        } }), "normal"] }), _jsxs("label", { className: "radio", children: [_jsx("input", { name: "formType", type: "radio", value: "viewOnly", checked: props.formType.type === "viewOnly", onChange: () => {
                                            props.setFormType({ type: "viewOnly" });
                                            // setFormType({ type: "viewOnly" });
                                        } }), "viewOnly"] })] }), _jsxs("footer", { className: "modal-card-foot", children: [_jsx("button", { className: "button is-info", onClick: () => {
                                    //              setCenterType("newCenter");
                                    //              history.push("contextNextPage");
                                    navigate.push({
                                        pathname: "/contextNextPage",
                                        state: { centerType: "newCenter", formType: props.formType },
                                    });
                                }, children: "OK" }), _jsx("button", { className: "button", onClick: () => {
                                    props.setOpenModal(false);
                                }, children: "Cancel" })] })] })] }));
};
