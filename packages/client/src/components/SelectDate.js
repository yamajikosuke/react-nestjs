import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import styled from "styled-components";
export const SelectDate = ({ disabled, param, setParam }) => {
    useEffect(() => {
        if (disabled) {
            setParam({
                year: "0",
                month: "0",
                day: "0",
            });
        }
    }, [disabled]);
    return (_jsx("div", { className: "field is-grouped", children: _jsxs("div", { className: "control", style: { display: "flex", alignItems: "center" }, children: [_jsx("div", { className: "select", children: _jsx("select", { disabled: disabled, value: param?.year, onChange: (e) => {
                            setParam({
                                year: e.target.value,
                                month: param?.month,
                                day: param?.day,
                            });
                        }, children: _jsx(CreateOption, { start: 1958, end: 2020 }) }) }), _jsx(DateItem, { children: "\u5E74" }), _jsx("div", { className: "select", children: _jsx("select", { disabled: disabled, value: param?.month, onChange: (e) => {
                            setParam({
                                year: param?.year,
                                month: e.target.value,
                                day: param?.day,
                            });
                        }, children: _jsx(CreateOption, { start: 1, end: 12 }) }) }), _jsx(DateItem, { children: "\u6708" }), _jsx("div", { className: "select", children: _jsx("select", { disabled: disabled, value: param?.day, onChange: (e) => {
                            setParam({
                                year: param?.year,
                                month: param?.month,
                                day: e.target.value,
                            });
                        }, children: _jsx(CreateOption, { start: 1, end: 31 }) }) }), _jsx(DateItem, { children: "\u65E5" })] }) }));
};
const CreateOption = ({ start, end, }) => {
    const nums = [];
    for (let i = start; i <= end; i++) {
        nums.push(i);
    }
    return (_jsxs(_Fragment, { children: [_jsx("option", {}), nums.map((num) => {
                return _jsx("option", { children: num }, num);
            })] }));
};
const DateItem = styled.div `
  margin: 0.5rem;
`;
