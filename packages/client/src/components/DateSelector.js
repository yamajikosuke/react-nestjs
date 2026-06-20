import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
export const DateSelector = ({ startYear, setDate }) => {
    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [selectedDay, setSelectedDay] = useState();
    const today = new Date();
    useEffect(() => {
        if (selectedYear && selectedMonth && selectedDay) {
            const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            setDate(selectedDate);
        }
        else {
            setDate(undefined);
        }
    }, [setDate, selectedYear, selectedMonth, selectedDay]);
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
    return (_jsxs(_Fragment, { children: [_jsx("select", { value: selectedYear, onChange: (event) => {
                    const year = Number(event.target.value);
                    // leap year -> not leap year in 2/29
                    if (!isLeapYear(year) &&
                        isLeapYear(selectedYear) &&
                        selectedMonth === 2 &&
                        selectedDay === 29) {
                        setSelectedMonth(undefined);
                        setSelectedDay(undefined);
                    }
                    setSelectedYear(year);
                }, children: _jsx(YearOptions, { start: startYear, end: today.getFullYear() }) }), _jsx("select", { value: selectedMonth, onChange: (event) => {
                    setSelectedMonth(Number(event.target.value));
                }, children: _jsx(MonthOptions, {}) }), _jsx("select", { value: selectedDay, onChange: (event) => {
                    setSelectedDay(Number(event.target.value));
                }, children: _jsx(DayOptions, { year: selectedYear, month: selectedMonth }) })] }));
};
