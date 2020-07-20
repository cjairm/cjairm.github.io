import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Fab, Fade, useMediaQuery, Typography } from "@material-ui/core";
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "calc(100vh - 64px)",
            minHeight: 550,
            [theme.breakpoints.down(600)]: {
                minHeight: 400,
                height: "calc(100vh - 56px)",
            },
            border: 5,
            display: "block",
            position: "relative",
        },
        backgroundImg: {
            backgroundImage: 'url("./images/homeBackground.jpg")',
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        overlayImg: {
            position: "absolute",
            top: 0,
            left: 0,
            transition: "0.5s ease",
            backgroundColor: "rgba(34, 116, 165, 0.25)",
            height: "100%",
            width: "100%",
        },
        textContainer: {
            display: "flex",
            position: "relative",
            flexGrow: 1,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        nameText: {
            fontSize: 90,
            [theme.breakpoints.down(600)]: {
                fontSize: 70,
            },
            color: "#fff",
            letterSpacing: "-2px",
            margin: "0 auto 18px auto",
            textShadow: "0px 1px 3px rgba(0, 0, 0, .8)",
            textAlign: "center",
        },
        aboutText: {
            width: "70%",
            fontSize: 20,
            color: "#A8A8A8",
            margin: "0 auto",
            textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
            textAlign: "center",
        },
        socialUl: {
            margin: "24px 0",
            padding: 0,
            fontSize: 30,
            textShadow: "0px 1px 2px rgba(0, 0, 0, .8)",
            "& li": {
                display: "inline-block",
                margin: "0 15px",
                padding: 0,
                "& a": {
                    textDecoration: "none",
                    outline: 0,
                },
            },
        },
        socialIcon: {
            color: "#fff",
        },
        arrowPosition: {
            position: "absolute",
            bottom: 30,
        },
    })
);

const Home: React.FC = () => {
    const classes = useStyles();

    const onSelectSectionHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        const anchor = (
            (event.target as HTMLButtonElement).ownerDocument || document
        ).querySelector("#about-anchor-section");

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Grid container className={classes.root} id="home-anchor-section">
            <div className={classes.backgroundImg}></div>
            <div className={classes.overlayImg}>
                <div className={classes.textContainer}>
                    <Typography variant="h1" className={classes.nameText}>
                        I'm Carlos Méndez
                    </Typography>
                    <Typography variant="h3" className={classes.aboutText}>
                        I want to be a person that inspire others, I want to be
                        a role model for those who think that it is imposible,
                        and I want to be an important person that always follows
                        values of respect, justice, and truth.
                    </Typography>
                    <ul className={classes.socialUl}>
                        <li>
                            <a
                                href="https://linkedin.com/in/cjairm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLinkClass"
                            >
                                <LinkedInIcon
                                    className={classes.socialIcon}
                                    fontSize="large"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/cjairm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLinkClass"
                            >
                                <GitHubIcon
                                    className={classes.socialIcon}
                                    fontSize="large"
                                />
                            </a>
                        </li>
                    </ul>
                    <Fade in={useMediaQuery("(min-width:600px)")}>
                        <Fab
                            className={classes.arrowPosition}
                            color="primary"
                            aria-label="more"
                            onClick={onSelectSectionHandler}
                        >
                            <KeyboardArrowDownIcon fontSize="large" />
                        </Fab>
                    </Fade>
                </div>
            </div>
        </Grid>
    );
};

export default Home;
