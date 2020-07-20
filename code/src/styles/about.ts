import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

export default useStyles;
