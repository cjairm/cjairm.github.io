import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

export default useStyles;
