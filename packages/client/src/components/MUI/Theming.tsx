import React from "react";
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

export const Theming: React.FC = () => {
  // https://mui.com/customization/color/#color
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: orange[500],
      },
    },
  });
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Theming</h1>
        <div className="content">
          <div className="field">
            <a
              href="https://mui.com/customization/theming/"
              target="_blank"
              rel="noreferrer"
            >
              https://mui.com/customization/theming/
            </a>
          </div>
          <hr />
          <ThemeProvider theme={theme}>
            <Checkbox defaultChecked />
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};
