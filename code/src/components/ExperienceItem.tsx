import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Avatar, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
        },
        image: {
            width: "auto",
            height: "100%",
            margin: "auto",
            maxHeight: 750,
            [theme.breakpoints.down(600)]: {
                maxWidth: "80%",
            },
        },
        title: {
            fontSize: 26,
            color: "rgba(255, 255, 255, .6)",
            fontWeight: 600,
            lineHeight: "1.5em",
        },
        subtitle: {
            fontSize: 20,
            fontWeight: 600,
            color: "rgba(255, 255, 255, .9)",
        },
        paragraph: {
            paddingBottom: ".5em",
            color: "rgb(255, 255, 255)",
            fontSize: 20,
        },
        containerText: {
            padding: theme.spacing(5),
            [theme.breakpoints.down(600)]: {
                textAlign: "center",
                margin: theme.spacing(2),
                padding: 0,
            },
        },
    })
);

type ArrayLengthMutationKeys =
    | "splice"
    | "push"
    | "pop"
    | "shift"
    | "unshift"
    | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
    ? TItems
    : never;
type FixedLengthArray<T extends any[]> = Pick<
    T,
    Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };

interface ComponentProps {
    reverse?: boolean;
    src: string;
    alt: string;
    head: FixedLengthArray<[string, string | null, string | null]>;
    content: string[];
    onClick?: (...args: any) => any;
    btnText?: string;
}

const ExperienceItem: React.FC<ComponentProps> = ({
    reverse,
    src,
    alt,
    head,
    content,
    onClick,
    btnText,
}) => {
    const classes = useStyles();

    const [title, subtitle, extra] = head;

    return (
        <Grid
            container
            className={classes.root}
            direction={reverse ? "row-reverse" : "row"}
        >
            <Grid item xs={12} sm={6}>
                <Avatar
                    alt={alt}
                    src={src}
                    variant="square"
                    className={classes.image}
                />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.containerText}>
                <Typography variant="h2" className={classes.title}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography variant="h2" className={classes.subtitle}>
                        {subtitle}
                    </Typography>
                )}

                {extra && (
                    <Typography
                        variant="h2"
                        style={{ paddingBottom: "1em" }}
                        className={classes.subtitle}
                    >
                        {extra}
                    </Typography>
                )}

                {content.map((paragraph, i) => (
                    <Typography key={i} className={classes.paragraph}>
                        {paragraph}
                    </Typography>
                ))}

                {onClick && btnText && (
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClick}
                    >
                        {btnText}
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export default ExperienceItem;
