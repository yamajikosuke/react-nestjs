import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import styled from "styled-components";
const SelectArea = styled.div `
  margin-bottom: 20px;
`;
const Content = styled.div `
  display: flex;
  align-items: center;
`;
const GrayLine = styled.div `
  margin-right: 4px;
  background: #ccc;
  flex: 1;
  height: 3px;
`;
const BlueLine = styled.div `
  margin-right: 4px;
  background: skyblue;
  flex: 1;
  height: 3px;
`;
const StepItem = styled.div `
  position: relative;
  margin-right: 4px;
`;
const StepLabel = styled.div `
  position: absolute;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
`;
const GrayCircle = styled.div `
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
`;
const ActiveCircle = styled.div `
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: skyblue;
`;
const CompleteCheck = styled.div `
  color: skyblue;
  font-weight: 700;
  font-size: 14px;
  line-height: 8px;
  width: 12px;
`;
const stepMarkMap = {
    inActive: _jsx(GrayCircle, {}),
    Active: _jsx(ActiveCircle, {}),
    Complete: _jsx(CompleteCheck, { children: "\u2713" }),
};
const getStepStatus = (idx, currentIndex) => {
    return idx === currentIndex - 1
        ? "Active"
        : idx < currentIndex - 1
            ? "Complete"
            : "inActive";
};
const Sample = ({ labels, currentIndex }) => {
    const items = labels.map((label, idx) => {
        return (_jsxs(React.Fragment, { children: [idx !== 0 && (idx > currentIndex - 1 ? _jsx(GrayLine, {}) : _jsx(BlueLine, {})), _jsxs(StepItem, { children: [stepMarkMap[getStepStatus(idx, currentIndex)], _jsx(StepLabel, { children: label })] })] }, idx));
    });
    return _jsx(Content, { children: items });
};
export const Stepper = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const labels = ["label_1", "label_2aaaaaaaaa", "label_3", "label_4"];
    const props = {
        labels,
        currentIndex,
    };
    const handleChange = (e) => {
        setCurrentIndex(Number(e.currentTarget.value));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Stepper" }), _jsxs("div", { className: "content", children: [_jsxs(SelectArea, { children: [_jsx("div", { children: "current index" }), _jsx("select", { onChange: handleChange, autoFocus: true, defaultValue: 1, children: labels.map((_, idx) => {
                                        return (_jsx("option", { value: idx + 1, children: idx + 1 }, idx));
                                    }) })] }), _jsx(Sample, { ...props })] })] }) }));
};
