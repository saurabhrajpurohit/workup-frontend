import React, { useState } from 'react';
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
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        height: "100vh",
        background: "transparent",
        margin: "auto",
        "& .MuiCard-root": {
            background: "linear-gradient(0deg,#3358f4,#1d8cf8)"
        },
        "& .MuiDivider-light": {
            backgroundColor: "white"
        }
    },
    margin: {
        margin: theme.spacing(2, 1)
    },
    buttonMargin: {
        display: "block",
        margin: theme.spacing(0, 1)
    },
    login: {
        float: "right"
    }
}));


const Login = (props) => {
    const classes = useStyles();

    const [user, setUser] = useState({ email: "", password: "" })

    const onChange = (event) => {
        setUser({
            ...user,
            [event.target.id]: event.target.value
        })
    }

    const login = () => {
        props.login(user, props.history);
    }

    return (
        <Box className={classes.root} alignItems="center" display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
            <Card >
                <CardContent>
                    <Grid item>
                        <Typography variant="h4" align="right">
                            Let's Go&nbsp;
                            <sup>
                                <Typography variant="caption" align="right">"Now"</Typography>
                            </sup>
                        </Typography>
                    </Grid>
                    <Divider light={true} />
                    <Grid item>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                                onChange={onChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                id="password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                                onChange={onChange}
                            />
                        </FormControl>
                    </Grid>
                </CardContent>
                <CardActions className={classes.buttonMargin}>
                    <Button variant="text" onClick={() => props.history.push("newuser")} >I'm New</Button>
                    <Button className={classes.login} startIcon={<ExitToApp />} variant="contained" onClick={login}>Login</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

const mapState = (state) => ({
    user: state.user,
})

const mapDispatch = (dispatch) => ({
    login: (reponse, history) => dispatch.user.loginAsync({reponse, history}),
})

export default connect(mapState, mapDispatch)(Login);