import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            [theme.breakpoints.down(350)]: {
                maxWidth: 250,
            },
            margin: "0 auto 12px auto",
            transition: "0.5s ease",
        },
        media: {
            height: 140,
        },
    })
);

interface ComponentProps {
    src: string;
    alt: string;
    title: string;
    content: string;
    onClick?: (...args: any) => any;
    btnText?: string;
}

const CardItem: React.FC<ComponentProps> = ({
    src,
    alt,
    title,
    content,
    onClick,
    btnText,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <CardMedia className={classes.media} image={src} title={alt} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {onClick && btnText && (
                <CardActions>
                    <Button onClick={onClick} size="small" color="primary">
                        {btnText}
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default CardItem;
