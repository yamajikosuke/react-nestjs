import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Slider, Button, MenuItem, MenuList, ListItemIcon, ListItemText, Typography, TextField, alpha, styled, FormControlLabel, Switch, } from "@mui/material";
import ContentCut from "@mui/icons-material/ContentCut";
import "./customize.css";
const SuccessSlider = styled(Slider)(({ theme }) => ({
    width: 300,
    color: theme.palette.success.main,
    "& .MuiSlider-thumb": {
        "&:hover, &.Mui-focusVisible": {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        },
        "&.Mui-active": {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        },
    },
}));
const StyledSlider = styled(Slider, {
    shouldForwardProp: (prop) => prop !== "error",
})(({ error, theme }) => ({
    ...(error && {
        // the overrides added when the new prop is used
        color: theme.palette.error.main,
        "& .MuiSlider-thumb": {
            "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.error.main, 0.16)}`,
            },
            // https://mui.com/customization/how-to-customize/
            "&.Mui-focused": {
                boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
            },
        },
    }),
}));
const CustomSlider = styled(Slider)({
    width: 300,
    color: "var(--color)",
    "& .MuiSlider-thumb": {
        [`&:hover, &.Mui-focusVisible`]: {
            boxShadow: "0px 0px 0px 8px var(--box-shadow)",
        },
        [`&.Mui-active`]: {
            boxShadow: "0px 0px 0px 14px var(--box-shadow)",
        },
    },
});
const successVars = {
    "--color": "#4caf50",
    "--box-shadow": "rgb(76, 175, 80, .16)",
};
const defaultVars = {
    "--color": "#1976d2",
    "--box-shadow": "rgb(25, 118, 210, .16)",
};
export const Customize = () => {
    const [vars, setVars] = React.useState(defaultVars);
    const handleChange = (event) => {
        setVars(event.target.checked ? successVars : defaultVars);
    };
    return (_jsxs("section", { className: "section", children: [_jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Customize" }), _jsxs("div", { className: "content", children: [_jsx("div", { className: "field", children: _jsx("a", { href: "https://mui.com/customization/how-to-customize/", target: "_blank", rel: "noreferrer", children: "https://mui.com/customization/how-to-customize/" }) }), _jsx("div", { className: "field", children: _jsx("a", { href: "https://mui.com/customization/color/#color", target: "_blank", rel: "noreferrer", children: "https://mui.com/customization/color/#color" }) }), _jsx("hr", {}), _jsx(Slider, { defaultValue: 30, 
                                // sx={{
                                //   width: 300,
                                //   color: "success.main",
                                // }}
                                sx: {
                                    width: 300,
                                    color: "success.main",
                                    "& .MuiSlider-thumb": {
                                        borderRadius: "1px",
                                    },
                                } }), _jsx("hr", {}), _jsx("div", { children: "https://mui.com/api/button/" }), _jsx(Button, { className: "Button", disabled: true, variant: "contained", children: "Button" })] }), _jsx("hr", {}), _jsx("div", { children: "https://mui.com/components/menus/" })] }), _jsx(MenuList, { children: _jsxs(MenuItem, { selected: true, className: "MenuItem", children: [_jsx(ListItemIcon, { children: _jsx(ContentCut, { fontSize: "small" }) }), _jsx(ListItemText, { children: "Cut" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "\u2318X" })] }) }), _jsx("hr", {}), _jsx("div", { children: "https://mui.com/components/text-fields/" }), _jsx(TextField, { id: "outlined-basic", label: "Outlined", variant: "outlined", color: "error", error: true }), _jsx("hr", {}), "Reusable style overrides", _jsx("div", { children: "https://mui.com/customization/how-to-customize/#2-reusable-style-overrides" }), _jsx(SuccessSlider, { defaultValue: 30 }), _jsx("hr", {}), "Dynamic variation", _jsx("div", { children: "https://mui.com/customization/how-to-customize/#3-dynamic-variation" }), _jsx("div", { children: "Dynamic CSS" }), _jsx(StyledSlider, { error: true }), _jsx("div", { children: "CSS variables" }), _jsx("div", { children: "https://mui.com/system/the-sx-prop/" }), _jsx("div", { children: "https://mui.com/system/spacing/" }), _jsx(FormControlLabel, { control: _jsx(Switch, { checked: vars === successVars, onChange: handleChange, color: "primary", value: "dynamic-class-name" }), label: "Success" }), _jsx(CustomSlider, { style: vars, defaultValue: 30, sx: { mt: 1 } })] }));
};
