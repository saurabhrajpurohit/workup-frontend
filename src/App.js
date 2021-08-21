import React, { useEffect, useState } from 'react';
import './App.css';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from './routes';
import { connect } from 'react-redux'

function App(props) {
  const [darkState] = useState(true);
  const palletType = darkState ? "dark" : "light";

  useEffect(() => {
  }, [props])

  let darkTheme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {

        },
      },
    },
    typography: {
      fontFamily: 'Poppins,sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 300,
      fontWeightMedium: 300,
      fontWeightBold: 300
    },
    palette: {
      type: palletType,
      background: {
        default: "#1e1e2f",
      },
      primary: {
        main: "#1e1e2f",
      },
      secondary: {
        main: '#3358f4',
      },
    }
  });

  darkTheme = responsiveFontSizes(darkTheme);
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {routes.map(route => {
            return <Route {...route} key={route.path} {...props} path={route.path} component={route.component} />
          })}
        </ThemeProvider>
      </Switch>
    </BrowserRouter>

  );
}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
  checkUser: () => dispatch.user.checkUser(),
})

export default connect(mapState, mapDispatch)(App);
