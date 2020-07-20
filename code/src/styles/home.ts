import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: "calc(100vh - 64px)",
            minHeight: 550,
            [theme.breakpoints.down(600)]: {
                minHeight: 400,
                height: "calc(100vh - 56px)",
            },
            border: 5,
            display: "block",
            position: "relative",
        },
        backgroundImg: {
            backgroundImage: 'url("./images/homeBackground.jpg")',
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        overlayImg: {
            position: "absolute",
            top: 0,
            left: 0,
            transition: "0.5s ease",
            backgroundColor: "rgba(34, 116, 165, 0.25)",
            height: "100%",
            width: "100%",
        },
        textContainer: {
            display: "flex",
            position: "relative",
            flexGrow: 1,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        nameText: {
            fontSize: 90,
            [theme.breakpoints.down(600)]: {
                fontSize: 70,
            },
            color: "#fff",
            letterSpacing: "-2px",
            margin: "0 auto 18px auto",
            textShadow: "0px 1px 3px rgba(0, 0, 0, .8)",
            textAlign: "center",
        },
        aboutText: {
            width: "70%",
            fontSize: 20,
            color: "#A8A8A8",
            margin: "0 auto",
            textShadow: "0px 1px 2px rgba(0, 0, 0, .5)",
            textAlign: "center",
        },
        socialUl: {
            margin: "24px 0",
            padding: 0,
            fontSize: 30,
            textShadow: "0px 1px 2px rgba(0, 0, 0, .8)",
            "& li": {
                display: "inline-block",
                margin: "0 15px",
                padding: 0,
                "& a": {
                    textDecoration: "none",
                    outline: 0,
                },
            },
        },
        socialIcon: {
            color: "#fff",
        },
        arrowPosition: {
            position: "absolute",
            bottom: 30,
        },
    })
);

export default useStyles;
