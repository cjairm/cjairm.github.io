import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ExperienceItem from "./ExperienceItem";
import { Education as EducationData } from "../data";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#363633",
        },
    })
);

const Education: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container id="education-anchor-section">
            {EducationData.map((item, i) => {
                let flag = false;
                if (i % 2 === 0) flag = true;

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
        </Grid>
    );
};

export default Education;
