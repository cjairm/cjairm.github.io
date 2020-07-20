import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            backgroundColor: "#363633",
            padding: `${theme.spacing(3)}px`,
        },
        textContainer: {
            "& p": {
                fontSize: 18,
                color: "rgba(255, 255, 255, .8)",
                lineHeight: 1.5,
                textAlign: "center",
            },
        },
    })
);

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.textContainer}>
                <Typography>Theme created by Carlos Méndez.</Typography>
            </Grid>
        </Grid>
    );
};

export default Footer;
