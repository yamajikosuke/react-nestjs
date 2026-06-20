import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { DateSelectorCustom } from "./DateSelectorCustom";
export const SelectDatePage = () => {
    const [param, setParam] = useState();
    const [, setParam_1] = useState();
    const [isDisabledManufacturedOn] = useState(false);
    const [date, setDate] = useState();
    const [isSelected, setIsSelected] = useState();
    useEffect(() => {
        if (!isSelected) {
            // setParam({
            //   year: "2020",
            //   month: "12",
            //   day: "31",
            // });
            setParam_1({
                year: undefined,
                month: undefined,
                day: undefined,
            });
        }
        setIsSelected(true);
    }, [isSelected]);
    useEffect(() => {
        console.log(param);
    }, [param]);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Hello date selector" }), _jsx(DateSelectorCustom, { disabled: isDisabledManufacturedOn, param: param, startYear: 2016, setParam: setParam, setDate: setDate, setIsSelected: setIsSelected }), _jsx("div", { children: `date : ${date?.toString()}` }), _jsx("div", { children: `year : ${date?.getFullYear()}` }), _jsx("div", { children: `month : ${date ? date.getMonth() + 1 : undefined}` }), _jsx("div", { children: `day : ${date?.getDate()}` }), _jsx("hr", {})] }));
};
