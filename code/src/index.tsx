import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "./styles/main";
import "./styles/main.css";
import "./i18n";

const app = (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
