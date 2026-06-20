import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
export const Intl = () => {
    const [, setItems] = useState([]);
    const intl = useIntl();
    useEffect(() => {
        const fetch = async () => {
            getList();
        };
        fetch();
    }, []);
    const getList = async () => {
        const res = await axios.get("/dictionary/1");
        console.log(res.data);
        setItems(res.data);
    };
    // const getKey = async () => {
    //   const res = await axios.get("/keys/");
    //   console.log(res.data);
    //   setItems(res.data);
    // };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React intl" }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Name" }), _jsx("div", { className: "control", children: _jsx("input", { className: "input", type: "text", placeholder: "Text input" }) }), _jsx("div", { children: intl.formatMessage({ id: "title" }) })] })] }) }));
};
