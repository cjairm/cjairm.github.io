import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container, Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            minHeight: 610,
            backgroundColor: "#363633",
            [theme.breakpoints.down(600)]: {
                minHeight: "calc(100vh)",
            },
        },
        container: {
            width: "100%",
            height: "100%",
        },
        imageContainer: {
            margin: "auto",
        },
        image: {
            width: "60%",
            height: "auto",
            margin: "auto",
            [theme.breakpoints.down(600)]: {
                width: 200,
                margin: `${theme.spacing(3)}px auto`,
            },
        },
        textContainer: {
            margin: "auto",
            [theme.breakpoints.down(600)]: {
                textAlign: "center",
            },
            "& h2": {
                fontSize: 22,
                color: "#fff",
                marginBottom: 12,
            },
            "& p": {
                fontSize: 18,
                color: "rgba(255, 255, 255, .8)",
                lineHeight: 1.5,
            },
        },
    })
);

const About: React.FC = () => {
    const classes = useStyles();

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
                            <Typography variant="h2">About Me</Typography>
                            <Typography>
                                I'm a person with a lot of dreams, I learn by
                                myself, I love to learn new things, and I always
                                keep updated on my work field. I'm an
                                entreprenour, and I've created two companies
                                which I have tried to help other people, such
                                as, the more voulnerable group of people in
                                Mexico.
                                <br />
                                <br />
                                I'm Mexican, and I speak two languages. I love
                                traveling. I love to eat every single regional
                                food everywhere I go. I enjoy life. I give a
                                smile to everyone.
                                <br />
                                <br />
                                I’m passionate about building great products
                                that make people’s lives easier. I have been
                                using JavaScript for 5 years, 2 years using
                                React and Redux. My expertise comes from
                                startups where I developed a lot of different
                                programs.
                            </Typography>

                            <br />

                            <Typography variant="h2">
                                Contact Details
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
