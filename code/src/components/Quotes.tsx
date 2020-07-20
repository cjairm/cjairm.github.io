import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import useStyles from "../styles/quotes";

const Quotes: React.FC = () => {
    const classes = useStyles();

    const { t } = useTranslation();

    return (
        <Grid container className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={6} className={classes.text}>
                        <Typography variant="h4">
                            <em>
                                {t("quotes.bruceone")}
                                <br />
                                {t("quotes.brucetwo")}
                                <br />
                                {t("quotes.brucethree")}
                                <br />
                                {t("quotes.brucefour")}
                            </em>
                        </Typography>
                        <Typography>— Bruce Lee</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.text}>
                        <Typography variant="h4">
                            <em>
                                {t("quotes.unknownone")}
                                <br />
                                {t("quotes.unknowntwo")}
                            </em>
                        </Typography>
                        <Typography>— Unknown</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Quotes;
