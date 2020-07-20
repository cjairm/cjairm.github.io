import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Quotes from "./components/Quotes";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: 64,
            marginBottom: 0,
            [theme.breakpoints.down(600)]: {
                marginTop: 0,
                marginBottom: 56,
            },
            transition: "0.5s ease",
        },
    })
);

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Header />
            <Home />
            <About />
            <Quotes />
            <Experience />
            <Projects />
            <Education />
            <Footer />
        </Grid>
    );
};

export default App;
