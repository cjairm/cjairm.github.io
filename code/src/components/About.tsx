import React from "react";
import { Grid, Container, Avatar, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useStyles from "../styles/about";

const About: React.FC = () => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <Grid container className={classes.root} id="about-anchor-section">
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className={classes.imageContainer}
                    >
                        <Avatar
                            alt="Carlos Mendez"
                            src="./images/aboutme.jpg"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} style={{ margin: "auto" }}>
                        <div className={classes.textContainer}>
                            <Typography variant="h2">
                                {t("about.titleabout")}
                            </Typography>
                            <Typography>
                                {t("about.first")}
                                <br />
                                <br />
                                {t("about.second")}
                                <br />
                                <br />
                                {t("about.third")}
                            </Typography>

                            <br />

                            <Typography variant="h2">
                                {t("about.titlecontact")}
                            </Typography>
                            <Typography>
                                Carlos Méndez
                                <br />
                                San Jose, CA
                                <br />
                                95126
                                <br />
                                (267) 485-1104
                                <br />
                                carlos@hadaelectronics.com
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default About;
