import React from "react";
import NavBar from "./NavBar";
import SideBar from "./Sidebar";
import { Grid, makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import routes from "./internalRoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    app: {
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuShow: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuHide: {
        marginRight: drawerWidth,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0,
        [theme.breakpoints.up('sm')]: {
            width: 0,
        },
    },
    menuButton: {
        marginRight: 36,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}))

const MainApp = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [show, setShow] = React.useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const handleMenu = () => {
        setShow(!show);
    };

    return (
        <Grid container className={classes.app}>
            <NavBar
                className={classes.appBar}
            >
                {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleMenu}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton> */}
            </NavBar>

            <SideBar open={open} handleDrawer={handleDrawer} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {routes.map(route => {
                    return <Route path={route.path} {...props} component={route.component} />
                })}
            </main>
        </Grid>
    )
}

export default MainApp;