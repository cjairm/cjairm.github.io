import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import Fab from "@material-ui/core/Fab";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "fixed",
            right: 40,
            bottom: 30,
            [theme.breakpoints.down(600)]: {
                right: 20,
                bottom: 80,
            },
            transition: "0.5s ease",
        },
    })
);

const ButtonLang: React.FC = () => {
    const classes = useStyles();

    const { i18n } = useTranslation();
    const [lang, setLang] = React.useState<"en" | "es">("en");

    const changeLangHandler = () => {
        if (lang === "en") {
            setLang("es");
        } else {
            setLang("en");
        }
    };

    React.useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    return (
        <Fab
            variant="extended"
            color="default"
            className={classes.root}
            onClick={changeLangHandler}
        >
            <LanguageIcon />
            {lang === "es" ? "Español" : "English"}
        </Fab>
    );
};

export default ButtonLang;
