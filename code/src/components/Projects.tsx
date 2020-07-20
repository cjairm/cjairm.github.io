import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";

import CardItem from "./CardItem";
import { Projects as ProjectsData } from "../data";

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
    })
);

const Project: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} id="projects-anchor-section">
            <Container maxWidth="lg">
                <Grid container className={classes.container}>
                    {ProjectsData.map((item, i) => (
                        <Grid key={i} item xs={12} md={6} lg={4}>
                            <CardItem
                                src={item.src}
                                alt={item.alt}
                                title={item.title}
                                content={item.content}
                                onClick={item.onClick}
                                btnText={item.btnText}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
};

export default Project;
