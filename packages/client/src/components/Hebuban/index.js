import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Member } from "./Member";
import { CounterContext } from "./context";
import { members } from "./data/members";
const Child1 = React.memo(() => {
    console.log("render Child1");
    return _jsx("p", { children: "Child1" });
});
const Child2 = React.memo((props) => {
    console.log("render Child2");
    return _jsxs("p", { children: ["Child2: ", props.count] });
});
export const Hebuban = () => {
    const [count, setCount] = useState(new Array(4).fill(0));
    const counterContext = { count, setCount };
    const [totalCount, setTotalCount] = useState(0);
    const [selectMember, setSelectMember] = useState("");
    const [checkedMember, setCheckedMember] = useState([]);
    useEffect(() => {
        const res = count.reduce((sum, element) => {
            return sum + element;
        }, 0);
        setTotalCount(res);
    }, [count]);
    useEffect(() => {
        console.log("checkedMember:", checkedMember);
    }, [checkedMember]);
    const handleOnChange = (e) => {
        setSelectMember(e.currentTarget.value);
    };
    const func = () => {
        console.log("func");
        return count;
    };
    const handleOnChangeCheckbox = (e) => {
        const value = e.currentTarget.value;
        const buffer = checkedMember.concat();
        if (e.currentTarget.checked) {
            buffer.push(value);
        }
        else {
            const delIndex = checkedMember.indexOf(value);
            buffer.splice(delIndex, 1);
        }
        setCheckedMember(buffer);
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "\u30D8\u30D6\u30D0\u30F3" }), _jsx(Child2, { count: count }), _jsx(CounterContext.Provider, { value: counterContext, children: _jsxs("div", { className: "content", children: [_jsx("div", { className: "field", children: _jsx("div", { className: "control", children: members.map((member) => (_jsx("div", { children: _jsxs("label", { className: "checkbox", children: [_jsx("input", { type: "checkbox", name: "members", value: member.name, onChange: handleOnChangeCheckbox }), member.name] }) }))) }) }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Subject" }), _jsx("div", { className: "control", children: _jsx("div", { className: "select", children: _jsxs("select", { onChange: handleOnChange, children: [_jsx("option", { children: "Select dropdown" }), members.map((member) => (_jsx("option", { value: member.name, children: member.name })))] }) }) })] }), _jsx("hr", {}), _jsxs("div", { children: ["Total Count:", totalCount] }), members.map((member, i) => {
                                return (_jsx(_Fragment, { children: _jsx(Member, { idx: i, name: member.name, profession: member.profession }) }));
                            })] }) })] }) }));
};
