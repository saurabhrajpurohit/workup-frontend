import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Card, CardContent, Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        "& .MuiDrawer-paper": {
            border: 'none',
            padding: theme.spacing(1.5),
            backgroundColor: "transparent",
        },
        "& ::-webkit-scrollbar": {
            width: "0.4em",
        },
        "& ::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "& ::-webkit-scrollbar-thumb": {
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
        },
    },
    sidebar: {
        top: 64,
        position: "relative",
        background: "linear-gradient(0deg,#3358f4,#1d8cf8)",
        height: "calc(100vh - 90px)",
        overflowY: "auto",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        "& .MuiListItem-gutters": {
            padding: theme.spacing(1, 0.75)
        }
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(11) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(11) + 1,
        },
        "& .MuiListItem-gutters": {
            padding: theme.spacing(1, 0.75)
        }
    },
    bottomButton: {
        padding: 0,
        textAlign: "end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { open } = props;
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.root, classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <Card className={classes.sidebar}>
                <CardContent>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Grid item className={classes.bottomButton}>
                        {open ? <IconButton onClick={props.handleDrawer}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton> :
                            <IconButton onClick={props.handleDrawer}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>}
                    </Grid>
                </CardContent>
            </Card>
        </Drawer>
    );
}
