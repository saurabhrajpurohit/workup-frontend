import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { login, logout, getLoginStatus } from '../utils/facebook';
import { connect } from 'react-redux'

const Dashboard = (props) => {

    useEffect(() => {
        checkLoginState();
    },[]);

    const checkLoginState = () => {
        getLoginStatus().then(response => {
            console.log(response);
            props.setUser(response);
        })
    }

    const loginClick = () => {
        login();
    }

    console.log(props);

    return (
        <React.Fragment>
            <Button
                onClick={loginClick}
                variant="contained"
                color="secondary"
                startIcon={<Facebook />}
            >
                Login
      </Button>
        </React.Fragment>
    )
}

const mapState = (state) => ({
    user: state.user,
})

const mapDispatch = (dispatch) => ({
    setUser: (reponse) => dispatch.user.setUser(reponse),
})

export default connect(mapState, mapDispatch)(Dashboard);