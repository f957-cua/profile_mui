import * as ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepOrange, yellow } from "@mui/material/colors";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const theme = createTheme({
    palette: {
        primary: deepOrange,
        secondary: yellow,
    },
});

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
