import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
    AppBar,
    useMediaQuery,
    Toolbar,
    Typography,
    Button,
    Slide,
    BottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";
import {
    Person as PersonIcon,
    Work as WorkIcon,
    AccountTree as AccountTreeIcon,
    School as SchoolIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        bottomNavRoot: {
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
        },
    })
);

const Header: React.FC = () => {
    const classes = useStyles();

    const navBarPoint = useMediaQuery("(min-width:600px)");

    const [value, setValue] = useState<string>("home");

    const moveViewHandler = (
        event: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<{}>,
        id: string
    ) => {
        const anchor = (
            (event.target as HTMLButtonElement).ownerDocument || document
        ).querySelector(`#${id}-anchor-section`);

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        let id = (event.target as HTMLButtonElement).textContent?.toLowerCase();
        if (!id) id = "home";
        moveViewHandler(event, id);
        setValue(newValue);
    };

    const onSelectSectionHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        let id = (event.target as HTMLElement).textContent?.toLowerCase();
        if (!id) id = "home";
        moveViewHandler(event, id);
        setValue(id);
    };

    return (
        <div className={classes.root}>
            <Slide direction="left" in={navBarPoint} mountOnEnter unmountOnExit>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Carlos Méndez
                        </Typography>
                        <Button
                            onClick={onSelectSectionHandler}
                            color="inherit"
                        >
                            About
                        </Button>
                        <Button
                            onClick={onSelectSectionHandler}
                            color="inherit"
                        >
                            Experience
                        </Button>
                        <Button
                            onClick={onSelectSectionHandler}
                            color="inherit"
                        >
                            Projects
                        </Button>
                        <Button
                            onClick={onSelectSectionHandler}
                            color="inherit"
                        >
                            Education
                        </Button>
                    </Toolbar>
                </AppBar>
            </Slide>

            <Slide
                direction="right"
                in={!navBarPoint}
                mountOnEnter
                unmountOnExit
            >
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.bottomNavRoot}
                >
                    <BottomNavigationAction
                        label="About"
                        value="about"
                        icon={<PersonIcon style={{ zIndex: -1 }} />}
                    />
                    <BottomNavigationAction
                        label="Experience"
                        value="experience"
                        icon={<WorkIcon style={{ zIndex: -1 }} />}
                    />
                    <BottomNavigationAction
                        label="Education"
                        value="school"
                        icon={<SchoolIcon style={{ zIndex: -1 }} />}
                    />
                    <BottomNavigationAction
                        label="Projects"
                        value="projects"
                        icon={<AccountTreeIcon style={{ zIndex: -1 }} />}
                    />
                </BottomNavigation>
            </Slide>
        </div>
    );
};

export default Header;
