import React, { Suspense } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Backdrop, CircularProgress } from "@material-ui/core";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Quotes from "./components/Quotes";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ButtonLang from "./components/ButtonLang";

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
        <Suspense
            fallback={
                <Backdrop open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
        >
            <Grid container className={classes.root}>
                <Header />
                <Home />
                <About />
                <Quotes />
                <Experience />
                <Projects />
                <Education />
                <Footer />
                <ButtonLang />
            </Grid>
        </Suspense>
    );
};

export default App;
