import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox, createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       primary: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       primary?: string;
//     };
//   }
// }
export const Theming = () => {
    // https://mui.com/customization/color/#color
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: orange[500],
            },
        },
    });
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Theming" }), _jsxs("div", { className: "content", children: [_jsx("div", { className: "field", children: _jsx("a", { href: "https://mui.com/customization/theming/", target: "_blank", rel: "noreferrer", children: "https://mui.com/customization/theming/" }) }), _jsx("hr", {}), _jsx(ThemeProvider, { theme: theme, children: _jsx(Checkbox, { defaultChecked: true }) })] })] }) }));
};
