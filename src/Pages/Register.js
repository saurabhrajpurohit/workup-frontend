import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Box, Divider, Grid } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Lock, ExitToApp } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
        height: "100vh",
        background: "transparent",
        margin: "auto",
        "& .MuiCard-root": {
            background: "linear-gradient(0deg,#3358f4,#1d8cf8)",
            minWidth: 325
        },
        "& .MuiDivider-light": {
            backgroundColor: "white"
        }
    },
    margin: {
        margin: theme.spacing(2, 1),
        padding: "0 8px 0 0"
    },
    buttonMargin: {
        display: "block",
        margin: theme.spacing(0, 1)
    },
    login: {
        float: "right"
    }
}));

export default function Register(props) {
    const classes = useStyles();

    return (
        <Box className={classes.root} alignItems="center" display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
            <Card >
                <CardContent>
                    <Grid item>
                        <Typography variant="h4" align="right">
                            Join US&nbsp;
                            <sup>
                                <Typography variant="caption" align="right">"Now"</Typography>
                            </sup>
                        </Typography>
                    </Grid>
                    <Divider light={true} />
                    <Grid item>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="input-with-Password-adornment">Password</InputLabel>
                            <Input
                                type="password"
                                id="input-with-Password-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth className={classes.margin}>
                            <InputLabel htmlFor="input-with-Password-adornment">Confirm Password</InputLabel>
                            <Input
                                type="password"
                                id="input-with-Password-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </CardContent>
                <CardActions className={classes.buttonMargin}>
                    <Button variant="text" >Register</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
