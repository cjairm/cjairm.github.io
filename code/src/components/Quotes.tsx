import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            backgroundColor: "#fff",
            margin: `${theme.spacing(5)}px auto`,
        },
        container: {
            width: "100%",
            height: "100%",
        },
        text: {
            textAlign: "center",
            whiteSpace: "pre-wrap",
            margin: "auto",
            [theme.breakpoints.down(600)]: {
                padding: `${theme.spacing(2)}px 0`,
            },
        },
    })
);

const Quotes: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={6} className={classes.text}>
                        <Typography variant="h4">
                            <em>
                                Research your own experience.
                                <br />
                                Absorb what is useful.
                                <br />
                                Reject what is useless.
                                <br />
                                Add what is essentially your own.
                            </em>
                        </Typography>
                        <Typography>— Bruce Lee</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.text}>
                        <Typography variant="h4">
                            <em>
                                There is no victory
                                <br />
                                without sacrifice.
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
