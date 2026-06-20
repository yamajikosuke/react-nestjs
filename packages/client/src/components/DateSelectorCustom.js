import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export const DateSelectorCustom = ({ disabled, param, setParam, startYear, setDate, setIsSelected, }) => {
    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedDay, setSelectedDay] = useState();
    const today = new Date();
    useEffect(() => { }, []);
    useEffect(() => {
        setSelectedYear(Number(param?.year));
        setSelectedMonth(Number(param?.month));
        setSelectedDay(Number(param?.day));
    }, [param]);
    useEffect(() => {
        if (disabled) {
            setParam({
                year: "0",
                month: "0",
                day: "0",
            });
        }
    }, [disabled, setParam]);
    useEffect(() => {
        if (selectedYear && selectedMonth && selectedDay) {
            const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            setDate(selectedDate);
            setParam({
                year: String(selectedYear),
                month: String(selectedMonth),
                day: String(selectedDay),
            });
        }
        else {
            setDate(undefined);
            setParam({
                year: "0",
                month: "0",
                day: "0",
            });
        }
    }, [setDate, selectedYear, selectedMonth, selectedDay, setParam]);
    const YearOptions = ({ start, end, }) => {
        const years = new Array();
        for (let year = start; year <= end; year++) {
            years.push(year);
        }
        return (_jsxs(_Fragment, { children: [_jsx("option", { value: undefined, children: "" }), years.map((year, idx) => {
                    return (_jsx("option", { value: year, children: year }, idx));
                })] }));
    };
    const MonthOptions = () => {
        const months = new Array();
        for (let month = 1; month <= 12; month++) {
            months.push(month);
        }
        return (_jsxs(_Fragment, { children: [_jsx("option", { value: undefined, children: "" }), months.map((month, idx) => {
                    return (_jsx("option", { value: month, children: month }, idx));
                })] }));
    };
    const DayOptions = ({ year, month }) => {
        year = year ?? startYear;
        month = month ?? 1;
        const endDatesOfYear = [
            31,
            isLeapYear(year) ? 29 : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];
        const days = new Array();
        const endDay = endDatesOfYear[month - 1];
        for (let day = 1; day <= endDay; day++) {
            days.push(day);
        }
        return (_jsxs(_Fragment, { children: [_jsx("option", { value: undefined, children: "" }), days.map((day, idx) => {
                    return (_jsx("option", { value: day, children: day }, idx));
                })] }));
    };
    const isLeapYear = (year) => {
        if (!year) {
            return false;
        }
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    return (_jsx("div", { className: "field is-grouped", children: _jsxs("div", { className: "control", style: { display: "flex", alignItems: "center" }, children: [_jsx("div", { className: "select", children: _jsx("select", { disabled: disabled, value: selectedYear, onChange: (event) => {
                            const year = Number(event.target.value);
                            setIsSelected(true);
                            // leap year -> not leap year in 2/29
                            if (!isLeapYear(year) &&
                                isLeapYear(selectedYear) &&
                                selectedMonth === 2 &&
                                selectedDay === 29) {
                                setSelectedMonth(undefined);
                                setSelectedDay(undefined);
                            }
                            setSelectedYear(year);
                        }, children: _jsx(YearOptions, { start: startYear, end: today.getFullYear() }) }) }), _jsx("div", { className: "select", children: _jsx("select", { disabled: disabled, value: selectedMonth, onChange: (event) => {
                            setSelectedMonth(Number(event.target.value));
                            setIsSelected(true);
                        }, children: _jsx(MonthOptions, {}) }) }), _jsx("div", { className: "select", children: _jsx("select", { value: selectedDay, disabled: disabled, onChange: (event) => {
                            setSelectedDay(Number(event.target.value));
                            setIsSelected(true);
                        }, children: _jsx(DayOptions, { year: selectedYear, month: selectedMonth }) }) })] }) }));
};
