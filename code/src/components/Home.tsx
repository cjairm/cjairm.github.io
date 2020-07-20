import React from "react";

import { Grid, Fab, Fade, useMediaQuery, Typography } from "@material-ui/core";
import {
    LinkedIn as LinkedInIcon,
    GitHub as GitHubIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@material-ui/icons";
import { useTranslation } from "react-i18next";

import useStyles from "../styles/home";

const Home: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

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
                        {t("home.name")}
                    </Typography>
                    <Typography variant="h3" className={classes.aboutText}>
                        {t("home.text")}
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
