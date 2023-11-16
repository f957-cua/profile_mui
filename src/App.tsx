import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Main from "./pages/Main";

function Copyright() {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mt={4}
        >
            {"Copyright © "}
            <Link color="inherit" href="#">
                healthcare filipchyk
            </Link>{" "}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }} color="secondary">
                <Main />
                <Copyright />
            </Box>
        </Container>
    );
}
