import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";

import ExperienceItem from "./ExperienceItem";
import { Experience as ExperienceData } from "../data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // maxWidth: "100%",
            // position: "relative",
            backgroundColor: "#363633",
        },
    })
);

const Experience: React.FC = () => {
    const classes = useStyles();

    return (
        <Box id="experience-anchor-section">
            {ExperienceData.map((item, i) => {
                let flag = false;
                if (i % 2 === 0) {
                    flag = true;
                }
                return (
                    <Grid key={i} container className={classes.root}>
                        <ExperienceItem
                            src={item.src}
                            alt={item.alt}
                            head={item.head as any}
                            content={item.content}
                            onClick={item.onClick}
                            btnText={item.btnText}
                            reverse={flag}
                        />
                    </Grid>
                );
            })}
        </Box>
    );
};

export default Experience;
